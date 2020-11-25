import { Router } from 'express'
import PostController from './controller'
import Destinations from '../../../database/schemas/Destinations';

/** @swagger
 * tags:
 *   name: Post
 *   description: API to manage your brands.
 */

const routes = Router()
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:"localhost:9200"
});

const postController = new PostController()

routes.post('/', (req, res)=>{
    client.search({  
        index: 'posts',
        type: 'POSTS',
        body: {
          query: {
            match: { "content": req.body.text }
          },
        }
      }, async function (error, response,status) {
          if (error){
            console.log("search error: "+error)
          }
          else {
            console.log("--- Response ---");
            // console.log(response);
            console.log("--- Hits ---");
           
            const result = await Promise.all(
              response.hits.hits.map(async hit => {
              
                // console.log(hit._source.destination_id)
                
                let destination = client.search({
                  index : 'destinations',
                  type : 'DESTINATIONS',
                  body : {
                    query : {
                      "match" : {"_id" : hit._source.destination_id}
                    },
                  }
                })
                // destination = (await destination).hits.hits
                destination = (await destination).hits.hits[0]
                destination = {
                  id: destination._id, ...destination._source
                }
                // const destination = await Destinations.findById(hit._source.destination_id)
                // // console.log()
                return {
                  ...hit,
                  destination
                }
              })
            )
            
            res.json(result)
          
          }
      });

  
})

routes.get('/', (req, res)=>{
  client.search({  
      index: 'posts',
      type: 'POSTS',
      body: {
        query: {
          "match_all": {}
        },
      }
    }, function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        // console.log(response);
        console.log("--- Hits ---");
        res.json(response.hits.hits)
      }
  })
})


export default routes