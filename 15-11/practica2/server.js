import cors from "cors";
import methodOverride from "method-override";
import express from "express";

import path from "path";

const server = express();
const log = console.log;


//server.use(express.static(path.dirname("assets")));
server.set("/views", path.join(__dirname, "views"));

server.use(express.urlencoded({extended:true})); 
server.use(express.json());

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

// server.get("/", (req, res) => {
//     res.send("mi primer endpoint");
// });

server.get("/minombre/:nombre-:apellido", (req, res) => {
    let nombre = req.params.nombre;
    let apellido = req.params.apellido;
    res.send(`su nombre es ${nombre} ${apellido}`)
});

server.get("/pais", (req, res) => {
    let pais = req.query.pais;
    res.send(`Mi pais es ${pais}`)
})

server.listen(3000, () => {
    log("start server")
});

server.post("/crear/usuario", (req, res) => {
    let correo = req.body.correo;
    let nombre = req.body.nombre;
    res.send(`usuario creado ${correo} nombre ${nombre}`);
});