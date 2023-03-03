// const getCharDetail = (res, id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then(data =>{
//         let character = {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin/*?.name*/
//         }
//         res
//         .writeHead(200, {"Content-Type":"application/json"})
//         .end(JSON.stringify(character));
//     })
//     .catch(err =>
//         res
//         .writeHead(500, {"Content-Type":"text/plain"})
//         .end(`El personaje con id:${id}, no fue encontrado`))
// };
// const express=require("express");
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail (req, res) {
    const { id } = req.params;

   try{
    const response = await axios(URL + id);
    const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.specie,
        image: response.data.image,
        gender: response.data.gender,
        origin: response.data.origin.name,
        status: response.data.status
    };
    res.status(200).json(character);
   } catch (error){
    console.error(error);
        res.status(500).json({message:`No se encontró un personaje con el id ${id}`});
   };
}

// const getCharDetail = (req, res)=>{
//     const params = req.params;
//     const id=params.id;

//     axios.get(`${URL+id}`).then(response=>{
//         const data = response.data;
//         const character={
//             id: data.id,
//             name: data.name,
//             species: data.specie,
//             image: data.image,
//             gender: data.gender,
//             origin: data.origin.name,
//             status: data.status
//         };
//         res.status(200).json(character);
//     })
//     .catch(error=>{
//         console.error(error);
//         res.status(500).json({message:`No se encontró un personaje con el id ${id}`});
//     }); 
// }
module.exports = getCharDetail;