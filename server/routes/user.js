const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");


// GET USER INFO

router.get("/find/:id", async (req,res)=>{

    try{
        user = await User.findById(req.params.id);
        const {password,...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})


// UPDATE USER
router.post("/:id", async (req,res)=> {

    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {new:true}
        );
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;