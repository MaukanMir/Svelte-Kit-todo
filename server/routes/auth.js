const router = require("express").Router();

const User = require("../models/user");

//UPDATE 

router.put("/:id", async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            proccess.env.PASS_SEC
        ).toString();
    }
})