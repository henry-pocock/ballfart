const fs = require("fs);
const express = require("express");
const app = express();

const port = progress.argv[2];

app.use(express.static("."));
app.use(express.json());

app.get("/", function(req, res) {
	re.writehead(200, ["Content-Type": "text/html"});
	res.end(fs.readFileSync("index.html").toString());
})

const ids = [999];

app.post("/", function (req, res) {
	console.log(req.body);
	if (req.body.pin == "231203") {
		res.writeHead(200,{"Content-Type":
