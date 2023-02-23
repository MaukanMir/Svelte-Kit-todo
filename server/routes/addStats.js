const router = require("express").Router();
const Stats = require("../models/stats");



// Post request to create stats DB for user
router.post("/:username", async (req,res)=>{
    
    const newStat = new Stats(req.body);
    console.log(newStat);

    try{
        const savedStat = await newStat.save();
        res.status(200).json(savedStat);

    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }

})