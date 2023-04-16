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
});


// Put request to update user stats
router.put("/find/:username", async (req,res)=>{

    try{
        const updatedStat = await Stats.findByIdAndUpdate(
            req.params.username,
            {
                $set:req.body,
            },
            {new:true}
        );
        res.status(200).json(updatedStat);
    }
    catch(err){
        res.status(500).json(err)
    }
})


// Get request to update user stats
router.get("getAllStats/:username", async (req,res)=>{

    try {
        const allStats = await Stats.find({username:req.params.username});
        res.status(200).json(allStats);
    } catch (err) {
        console.log(err + req.params.username)
        res.status(500).json(err);
    }
})

module.exports = router;