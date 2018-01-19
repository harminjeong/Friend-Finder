var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });


app.listen(3000, () => console.log('Example app listening on port 3000!'))

