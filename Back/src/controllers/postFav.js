const { Favorite } = require('../DB_connection');

const postFav = async (character) => {
    try {
        const { name, gender, species, origin, status, image } = character;

        if(!name || !gender || !species ||  !origin || !status || !image){
            throw new Error("Faltan datos obligatorios");
        };

        const newFav = { name, gender, species, origin, status, image };

        await Favorite.create(newFav);

        return newFav;

    } catch (error) {
        return {error: error.message};
    }
};

module.exports = postFav;