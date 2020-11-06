import { Router } from 'express'
import CommentController from './controller'

/** @swagger
 * tags:
 *   name: Comment
 *   description: API to manage your brands.
 */

const routes = Router()
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:"localhost:9200"
});

const commentController = new CommentController()

routes.post('/', (req, res)=>{
    client.search({  
        index: 'comments',
        type: 'COMMENTS',
        body: {
          query: {
            match: { "content": req.body.text }
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
      index: 'comments',
      type: 'COMMENTS',
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