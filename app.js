// Node Js Tutorial

const http = require("http");
http
  .createServer((request, response) => {
    response.write('Hello my port of node js ');
    response.end();
  })
  .listen(4200);

// module.exports = {

//   x: 10,
//   y: 20,
//   z: function (params) {
//     return 10;
//   },
// };

// const fs = require("fs");
// console.log("Hlooooo");

// fs.writeFileSync("html.text", "like and subscribed");
