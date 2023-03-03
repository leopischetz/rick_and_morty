let { favs } = require("../utils/favs");
const { Router } = require("express");

const favsRouter = Router();

favsRouter.post("/create", (req, res)=>{
    favs.push({ ...req.body });
    res.status(201).json(favs);
});

favsRouter.get("/get", (req, res) =>{
    res.status(200).json(favs);
});

favsRouter.delete("/delete", (req,res) =>{
    const { id } = req.params;
    favs = favs.filter((el) => el.id !== Number(id));
    res.status(200).json(favs);
});

module.exports = favsRouter;
