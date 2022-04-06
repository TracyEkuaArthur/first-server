const express = require("express")

const app = express();

app.listen(500, () =>{
    console.log("🚀 server up and running 500");

    app.get("/", (req, res) =>{
        res.send("<h1>Hello World!!!</h1>");
    });
});

app.get("/greet",(req, res) =>{
    res.send("<h1>My World</h1>");
});

