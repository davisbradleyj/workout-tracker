const path = require("path")
const db = require("../models");

module.exports = function(app){
    // path to static index page
    app.get("/", function (req,res) {
        console.log("at home page")
        res.sendFile(path.join(__dirname,"../public/html/index.html"));
        });
    })

    //path to static exercise page
    app.get("/exercise", function (req,res) {
        res.sendFile(path.join(__dirname,"../public/html/exercise.html"));
    })
    
    //path to static stats page
    app.get("/stats", function (req,res) {
        res.sendFile(Path.join(__dirname,"../public/html/stats.html"));
    })

    app.get("/api/workouts", function(req,res) {

    })

    app.put("/api/workouts/:id", function(req,res) {

    })

    app.post("/api/workouts", function(req,res) {

    })

    app.get("/api/workouts/range", function(req,res) {
        
    })
}
