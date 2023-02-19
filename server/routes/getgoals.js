const router = require("express").Router();
const Goals = require("../models/goals");

// GET all orders
router.get("/find/:userid", async (req,res)=>{
    
    try{
        const goals = await Goals.find();
        res.status(200).json(goals);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;