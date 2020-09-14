const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const PORT = process.env.PORT || 3000

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require('dotenv').config();

app.use(require("./routes/html.js"))
app.use(require("./routes/api.js"))

mongoose.connect("mongodb+srv://" + process.env.MONGOUSER + ":" + process.env.MONGOPASS + "@cluster0.ddnbo.azure.mongodb.net/workout?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
