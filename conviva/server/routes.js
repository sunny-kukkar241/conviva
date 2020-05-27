var express = require("express");
var router = express.Router();
const fs = require("fs");
const factory = require("./factory");
var bodyParser = require("body-parser");

router.get("/customers", function(req, res) {
  let jsonData = {};
  fs.readFile("customers.json", "utf-8", (err, data) => {
    if (err) res.send(jsonData);
    else {
      return res.send(JSON.parse(data));
    }
  });
});

router.get("/address/:customerId", function(req, res) {
  let jsonData = {};
  fs.readFile("customer_address.json", "utf-8", (err, data) => {
    if (err) res.send(jsonData);
    else {

      //console.log(JSON.parse(data));
      var data1 = factory.getCustomerAddress(req, data);
      res.send(data1);
    }
  });
});


module.exports = router;
