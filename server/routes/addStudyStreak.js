
const router = require("express").Router();
const Streak = require("../models/studyStreak");


// Post request to create stats DB for user
router.post("/find/:username", async (req,res)=>{
    
    const newStreak = new Streak(req.body);
    console.log(newStreak);

    try{
        const savedStreak = await newStreak.save();
        res.status(200).json(savedStreak);

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
