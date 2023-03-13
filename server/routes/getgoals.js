const router = require("express").Router();
const Goals = require("../models/goals");

// GET all goals
router.get("/find/:userId", async (req,res)=>{
    
    try{
        const goals = await Goals.find({userId:req.params.userId});
        console.log(goals)
        res.status(200).json(goals);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;