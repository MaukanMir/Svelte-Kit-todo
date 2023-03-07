
const router = require("express").Router();
const Streak = require("../models/studyStreak");


// Post request to create stats DB for user
router.post("/create/:username", async (req,res)=>{
    
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

// get request for study streak

router.get("/find/:username", async (req,res)=>{

    try {
        const streak = await Streak.find({username: req.params.userId});
        const { password, ...others } = user._doc;
        res.status(200).json(streak);
      } catch (err) {
        res.status(500).json(err);
      }

})

module.exports = router;
