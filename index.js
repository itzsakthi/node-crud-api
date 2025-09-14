// npm init -y => installs package.json file

// npm i express => installs node_modules  &  package-lock.json

// npm i nodemon -D => installs nodemon as dev dependency

// npm i mongoose => for connecting to mpngodb


const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/users", userRoute);


app.get("/", (req, res) => {
  res.send("Hii from Backend Node API");
});


mongoose.connect("mongodb+srv://admin:admin@backenddb.psnecet.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
        console.log("Port is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection to DB failed");
})



