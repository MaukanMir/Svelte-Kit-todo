
const router = require("express").Router();
const Streak = require("../models/studyStreak");


// Post request to create stats DB for user
router.post("/find/:username", async (req,res)=>{
    
    const newStat = new Streak(req.body);
    console.log(newStat);

    try{
        const savedStat = await newStat.save();
        res.status(200).json(savedStat);

    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});

//PUT request for editing

// Put request to update user stats
router.put("/update/:username", async (req,res)=>{

    try{
        const updatedStat = await Streak.findByIdAndUpdate(
            req.params.id,
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
});

module.exports = router;
