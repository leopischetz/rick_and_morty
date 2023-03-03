const express = require('express');
const server = express();
const PORT = 3001;
const router = require("../src/routes/index");
const cors = require("cors");
const favsRouter = require("../src/routes/favsRouter");


server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(PORT, ()=>{
    console.log(`Server raised in port ${PORT}`)
});



