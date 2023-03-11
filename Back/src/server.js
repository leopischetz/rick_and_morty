const express = require('express');
const server = express();
const PORT = 3001;
const router = require("../src/routes/index");
const morgan = require("morgan");
const cors = require("cors");
const favsRouter = require("../src/routes/favsRouter");
const { saveApiData } = require('./controllers/saveApiData');
const { sequelize } = require('./DB_connection');
const getAllChars = require('../src/controllers/getAllChars');


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.get('/rickandmorty/allCharacters', async (req, res) =>{
    try {
        const allCharacters = await getAllChars();

        return res.status(200).json(allCharacters);

    } catch (error) {
        res.status(404).send("Pasó algo raro");
    };
} );


sequelize.sync({ force: true }).then(async ()=>{
    console.log(await saveApiData());
    await saveApiData();    
    console.log("DB sincronizada");
    server.listen(PORT, ()=>{
        console.log(`Server raised in port ${PORT}`)
    });
});




