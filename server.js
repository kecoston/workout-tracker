const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const htmlRoutes = require("./routes/html-routes.js")
const apiRoutes = require("./routes/api-routes")

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workout");

const app = express();

app.use(logger("dev"));

app.use(htmlRoutes)
app.use(apiRoutes)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, error => {
    if (error) throw error
    console.log("Connected to Server")
});

