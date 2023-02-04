const router = require("express").Router();
const Goals = require("../models/goals");
// Create goals
router.post("/api/creategoals", async (req,res)=>{

    const newGoal = new Goals(req.body);
    console.log(goal);

    try{
        const savedGoal = await newGoal.save();
        res.status(200).json(savedGoal);
    }catch(err){
        res.status(500).json(err);
    }

})