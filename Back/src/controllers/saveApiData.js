const axios = require('axios');
const { Character } = require('../DB_connection');

const URL = "https://rickandmortyapi.com/api/character?page=";


const getApiData = async ()=>{
    try {
        let i=1;
        let characters = [];

        while(i<6){

            const apiData = await axios.get(`https://rickandmortyapi.com/api/character?page=+${i}`);
            characters.push(apiData);
            i++
        }
        
        characters= (await Promise.all(characters)).map(res => res.data.
            results.map(char =>{
                return({
                    id: char.id,
                    name: char.name,
                    species: char.species,
                    status: char.status,
                    origin: char.origin.name,
                    gender: char.gender,
                    image: char.image,
                })
            }));

            let allCharacters = [];
            characters.map(char => {allCharacters = allCharacters.concat(char)});

            return allCharacters;
        
    } catch (error) {
        return {error: error.message};
    }
};

const saveApiData = async () =>{
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters);  
    } catch (error) {
        return {error: error.message};
    };   
};

module.exports={
    saveApiData
}