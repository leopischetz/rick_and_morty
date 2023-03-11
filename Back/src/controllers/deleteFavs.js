const { Favorite } = require('../DB_connection');

async function deleteFavs(id){
    try {
       const favFinded = await Favorite.findByPk(id);
       
       if(!favFinded) throw new Error('No existe el id');

       favFinded.destroy();

       return "Eliminado correctamente";

    } catch (error) {
        return {error: error.message};
    }
};

module.exports= deleteFavs;
