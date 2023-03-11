const { Favorite } = require('../DB_connection');

const URL = "https://rickandmortyapi.com/api/character/";

async function getAllFavs() {    
try {
      const allFavorites = await Favorite.findAll();

      if(!allFavorites) throw new Error('No hay favoritos');

      return allFavorites;

} catch (error) {
    return {error: error.message};   
};
}


module.exports= getAllFavs;