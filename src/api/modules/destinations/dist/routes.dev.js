"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @swagger
 * tags:
 *   name: Destination
 *   description: API to manage your brands.
 */
var routes = (0, _express.Router)();

var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: "localhost:9200"
});
var destinationController = new _controller["default"]();
routes.post('/', function (req, res) {
  client.search({
    index: 'destinations',
    type: 'DESTINATIONS',
    body: {
      query: {
        match: {
          "location": req.body.text
        }
      }
    }
  }, function (error, response, status) {
    if (error) {
      console.log("search error: " + error);
    } else {
      console.log("--- Response ---"); // console.log(response);

      console.log("--- Hits ---");
      res.json(response.hits.hits);
    }
  });
});
routes.get('/', function (req, res) {
  client.search({
    index: 'destinations',
    type: 'DESTINATIONS',
    body: {
      query: {
        "match_all": {}
      }
    }
  }, function (error, response, status) {
    if (error) {
      console.log("search error: " + error);
    } else {
      console.log("--- Response ---"); // console.log(response);

      console.log("--- Hits ---");
      res.json(response.hits.hits);
    }
  });
});
var _default = routes;
exports["default"] = _default;