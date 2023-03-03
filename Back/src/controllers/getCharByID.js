// const axios = require("axios");
// const getCharById = (res, id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then(data =>{
//         let character = {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             species: data.species
//         }
//         res
//         .writeHead(200, {"Content-Type":"application/json"})
//         .end(JSON.stringify(character))
//     }).catch(err =>
//         res
//         .writeHead(500, {"Content-Type":"text/plain"})
//         .end(`El personaje con id:${id}, no fue encontrado`))
// };
// module.exports = getCharById;
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
    const { id } = req.params;

try {
    const response = await axios(URL + id);
    const character ={
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
    };
    res.status(200).json(character);    
} catch (error) {
    res.status(500).send(error.message);    
};
}

// const getCharById = (req, res)=>{
//     const params = req.params;
//     const id=params.id;

//     axios.get(`${URL+id}`).then(response=>{
//         const data = response.data;
//         const character={
//             id: data.id,
//             name: data.name,
//             species: data.species,
//             image: data.image,
//             gender: data.gender,
//         };
//         res.status(200).json(character);
//     })
//     .catch(error=>{
//         console.error(error);
//         res.status(500).json({message:`No se encontró un personaje con el id ${id}`});
//     }); 
// }

module.exports= getCharById;