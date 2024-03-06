
const express = require("express");
const mysql = require("mysql");

const app = express();
const db = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'',
    database:'pmo'



})

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.listen(5001, () => {
    console.log("Server started");
});

