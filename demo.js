const http = require("http");
const fs = require("fs");
const port = 8080;
const server = http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
      if (url === "/") {
        fs.readFile("message.txt", (err, data) => {
          if(err){
            console.log(err);
          }
          res.write("<html>");
          res.write("<head><title>instagram</title></head>");
          res.write("<body>");
          res.write("<h1 style=color:#F70776>Welcome to instagram :)</h1>");
          // res.write(method);
          res.write(`<body><h3 style=color:#2405f0>${data}</h3></body>`);
          res.write(
            '<form action="/message" method="post" autocomplete="on"><label style=color:#05f01c for="userName">Send a message : </label><input type="text" name="msg" required><button style=color:#4E9F3D>Post</button></form>'
          );
          res.write("</body>");
          res.write("</html>");
          return res.end();
          });
      }
    if (url === "/message" && method === "POST") {
      const userData = [];
      req.on("data", (data) => {
        userData.push(data);
      });
      return req.on("end", () => {
        const parsedData = Buffer.concat(userData).toString();
        console.log(parsedData);
        const message = parsedData.split("=")[1];
        console.log(message);
        fs.writeFile("message.txt", message, (err) => {
          if (err) {
            console.log(err);
          }
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
        // return res.end();
      });
    }
  })
  .listen(port);
