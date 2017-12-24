require("./config/config");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    res.send({success: "you have successfully loaded the home page"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("listening on....", PORT);
});