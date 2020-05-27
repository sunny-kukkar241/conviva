var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();
var router = require("./routes");
var cors = require("cors");

app.use(bodyParser.json());

app.use("/api", cors(), router);
const port = 4001;
const server = http.createServer(app);
server.listen(port, () => {
  //var host = server.address().address;
  console.log(`server is running on port ${port}`);
});
