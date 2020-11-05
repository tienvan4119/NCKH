"use strict";

var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: "localhost:9200"
});
client.search({
  index: 'destinations',
  type: 'DESTINATIONS',
  body: {
    query: {
      match: {
        "location": "Ngu Hanh Son"
      }
    }
  }
}, function (error, response, status) {
  if (error) {
    console.log("search error: " + error);
  } else {
    console.log("--- Response ---");
    console.log(response);
    console.log("--- Hits ---");
    response.hits.hits.forEach(function (hit) {
      console.log(hit);
    });
  }
});