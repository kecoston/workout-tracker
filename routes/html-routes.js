const Router = require("express").Router()
const path = require("path")

Router.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/html/index.html"))
}) 

Router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"))
})

Router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"))
})

module.exports = Router 