const url = require("url");
const http = require("http");
// http://localhost:8080/about?year=2024&id=10&action=submit
const server = http.createServer((req, res) => {
  const link = url.parse(req.url, true);
  console.log(link.query);
  if (link.pathname == "/about") {
    res.end(
      ` "Year:" ${link.query.year} \n "HostName:" ${link.hostname} \n "PathName:" ${link.pathname} \n "Id:" ${link.query.id} \n "Action Page:" ${link.query.action}`
    );
  } else if (link.pathname == "/") res.end("Welcome");
  else res.end("Not Found");
});

server.listen(8080);
