// let { favs } = require("../utils/favs");
const { Router } = require("express");
const favsRouter = Router();
const postFav = require('../controllers/postFav');
const getAllFavs = require('../controllers/getAllFavs');
const deleteFavs = require("../controllers/deleteFavs");

favsRouter.post("/create", async (req, res)=>{
    try {
        const characterFav = await postFav(req.body);

        if(characterFav.error) throw new Error(characterFav.error);

        res.status(201).json(characterFav);

    } catch (error) {
        return res.status(404).send(error.message);
    }    
});

favsRouter.get("/get", async (req, res) =>{
    try {
        const allFavs = await getAllFavs();

        if(allFavs.error) throw new Error(allFavs.error);

        return res.status(200).json(allFavs);

    } catch (error) {
        return res.status(404).send(error);
    }
});

favsRouter.delete("/delete/:id", async (req,res) =>{
    const { id } = req.params;
    try {
        const deleteFavorite = await deleteFavs(id);

        if(deleteFavorite.error) throw new Error(deleteFavorite.error);

        return res.status(200).send(deleteFavorite);
        
    } catch (error) {
        return res.status(404).send(error);
    }   
});

module.exports = favsRouter;
