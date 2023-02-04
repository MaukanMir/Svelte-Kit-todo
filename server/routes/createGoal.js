const router = require("express").Router();
const Goals = require("../models/goals");
// Create goals
router.post("/", async (req,res)=>{

    const newGoal = new Goals(req.body);
    console.log(newGoal);

    try{
        const savedGoal = await newGoal.save();
        res.status(200).json(savedGoal);
    }catch(err){
        console.log("here")
        res.status(500).json(err);
    }

})

module.exports = router;