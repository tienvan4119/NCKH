import { Router } from 'express'
import PropertyController from './controller'

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

const propertyController = new PropertyController()

routes.post('/', (req, res)=>{
    client.search({  
        index: 'properties',
        type: 'PROPERTIES',
        body: {
          query: {
            match: { "name": req.body.text }
          },
        }
      },function (error, response,status) {
          if (error){
            console.log("search error: "+error)
          }
          else {
            console.log("--- Response ---");
            // console.log(response);
            console.log("--- Hits ---");
            res.json(response.hits.hits)
          }
      });
})

routes.get('/', (req, res)=>{
  client.search({  
      index: 'properties',
      type: 'PROPERTIES',
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