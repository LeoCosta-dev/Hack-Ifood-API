import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Acesso ao servidor pelo endereço http://localhost:${port}`)
})

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Paçoca</h1>")
})