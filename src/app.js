const express = require("express");
const connection = require("./infra/connection");
const CreateTable = require("./infra/CreateTable");


const app = express();
const port = process.env.PORT || 3000;

connection.connect((e) => {
    if(e){
        console.log(e)
    } else {
        CreateTable.init(connection)
        app.listen(port, ()=>{
            console.log(`Acesso ao servidor pelo endereço http://localhost:${port}`)
        })
        
        app.get("/", (req, res)=>{
            res.status(200).send("<h1>Paçoca</h1>")
        })
    }
})