const fs = require("fs");
const http = require("http");
const port = 3000;
let data = fs.readFileSync("index.html");
http
  .createServer(function(req, res) {
    // console.log(req);
    if (req.url === "/") {
      res.write("hello worM");
      res.end();
    } else if (req.url === "/about") {
      console.log(req.url);
      res.write("we are from here!");
      res.end();
    } else if (req.url === "/contact") {
      res.write(data);
      res.end();
    }
  })
  .listen(port, function() {
    console.log("Server at http://localhost:3000");
  });
// __________________________________________________
