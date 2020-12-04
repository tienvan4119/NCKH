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

routes.get('/:type', (req, res)=>{
  console.log(req.query)
  console.log(req.params)
  client.search({  
      index: 'destinations',
      type: 'DESTINATIONS',
      body: {
        "from" : 0, "size" : req.query.size || 5,
        query: {
          // "from" : 0, 'size' : 30,
          
          match: { "type": req.params.type }
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