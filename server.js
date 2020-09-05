const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require('dotenv').config()



mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://" + process.env.MONGOUSER + ":" + process.env.MONGOPASS + "@cluster0.ddnbo.azure.mongodb.net/workoutData?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
