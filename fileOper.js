const fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  res.write("File Data : ");
  fs.readFile("Sample.txt", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(8080);

//File Operation

// Open File in read mode
fs.open("Sample1.txt", "r", (err) => {
  if (err) console.log(err);
  console.log("File Open in Read Mode");
});

// Read File (Blocking)
var data = fs.readFileSync("Sample.txt");
console.log("Data in File:", data.toString());

// Read File (Non Blocking)
fs.readFile("Sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content:", data);
});

// Write File (Non Blocking)
fs.writeFile("Sample.txt", "Hello, this is a sample text file!", (err) => {
  if (err) console.log(err);
  console.log("Data Written in File");
});

//Append File
fs.appendFile("Sample.txt", "Appended Data", (err) => {
  if (err) console.log(err);
  console.log("Appended Data in File");
});

// Delete File
// fs.unlink("Sample.txt", (err) => {
//   if (err) console.log(err);
//   console.log("File Deleted");
// });
