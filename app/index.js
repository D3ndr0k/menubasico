import express from "express";

//fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));




//server

const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("servidor 4000",app.get("port"));


//config

app.use(express.static(__dirname + "/public"));


//rutas

app.get("/",(req,res)=> res.sendFile( __dirname + "/pages/index.html"))
app.get("/ingresar",(req,res)=> res.sendFile( __dirname + "/pages/ingresar.html"))






/*

let mysql = require("mysql2");

let conn = mysql.createConnection({

    host: "localhost",
    database: "tienda_1",
    user: "root",
    password: "root"
});

conn.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conectado")
    }
});


conn.query('select * from admin',function(error,results,fields){
    if(error)
        throw error;

    results.forEach(result =>{
        console.log(result);
    })
})

*/
