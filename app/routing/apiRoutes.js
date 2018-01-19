var path = require("path");
var friends = require("../data/friends.js");

var difference = 0;

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })
    app.post("/api/friends", function(req, res){
        

        
    })
}
console.log(friends);