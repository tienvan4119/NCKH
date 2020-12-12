import { Router } from 'express'
import DestinationController from './controller'

/** @swagger
 * tags:
 *   name: Destination
 *   description: API to manage your brands.
 */

const routes = Router()
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:"localhost:9200"
});

const destinationController = new DestinationController()

routes.post('/', (req, res)=>{
    client.search({  
        index: 'destinations',
        type: 'DESTINATIONS',
        body: {
          query: {
            match: { "location": req.body.text }
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
      index: 'destinations',
      type: 'DESTINATIONS',
      body: {
        "from" : 0, "size" : req.query.size || 5,
        query: {
          "match_all": {}
        },
      }
    },async function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        // console.log(response);
        console.log("--- Hits ---");

        const result = await Promise.all(
          response.hits.hits.map(async hit => {
            console.log(hit._id)
            let keyphrase = client.search({
              index: 'keyphrases',
              type: 'KEYPHRASES',
              body:{
                query:{
                  "match" : {"destination_id" : hit._id}
                }
              }
            })
            keyphrase = (await keyphrase).hits.hits[0]
            keyphrase = [
               ...keyphrase["_source"]["keyphrase"]
            ]
            
            return {
              ...hit,        
              keyphrase
            }
          })
         )

        // console.log(result)
        res.json(result)
      }
  })
})

routes.get('/:type', (req, res)=>{
  console.log(req.query)
  console.log(req.params)
  client.search({  
      index: 'destinations',
      type: 'DESTINATIONS',
      body: {
        "from" : 0, "size" : req.query.size || 5,
        query: {
          
          match: { "type": req.params.type }
        },
      }
    },async function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        // console.log(response);
        console.log("--- Hits ---");

        const result = await Promise.all(
          response.hits.hits.map(async hit => {
            console.log(hit._id)
            let keyphrase = client.search({
              index: 'keyphrases',
              type: 'KEYPHRASES',
              body:{
                query:{
                  "match" : {"destination_id" : hit._id}
                }
              }
            })
            keyphrase = (await keyphrase).hits.hits[0]
            keyphrase = [
               ...keyphrase["_source"]["keyphrase"]
            ]
            
            return {
              ...hit,        
              keyphrase
            }
          })
         )

        res.json(result)
      }
  })
})

export default routes