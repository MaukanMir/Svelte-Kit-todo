const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req,res)=>{

    const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
    ).toString(),
});

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

// LOGIN

router.post("/login", async (req, res) => {

    try {
    const user = await User.findOne({ username: req.body.username });
    if(!user){res.status(401).json("wrong credentials"); return}

    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if(OriginalPassword !== req.body.password){
        OriginalPassword !== req.body.password &&
        res.status(401).json("Wrong password!");
        return "Login failed"
    }

        const { password, ...others } = user._doc;
        res.status(200).json({...others});

    } catch (err) {
        res.status(500).json(err);
    }

});
module.exports = router;
