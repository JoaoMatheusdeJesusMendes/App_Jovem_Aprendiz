require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();


// Config JSON Response
app.use(express.json())

// Config application routes
app.use("", require("./routes/routes.js"));
app.use("/status", (req, res) => {
    res.status(200).json("active");
});

mongoose.set('strictQuery', true); // Desativando a verificação estrita de consultas

// Connect to the database
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@jaapp.umcir5b.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(3000);
        console.log("Connected to the database.")
    })
    .catch((error) => {
        console.log(error)
    });


