const express = require("express");
const router = express.Router();
const Adi = require("../models/Adi.js");
const {body,validationResult}=require('express-validator');

router.post("/",[
    body('name','enter the valid name').isLength({min:3}),
    body('email','enter the valid email').isEmail(),
    body('password','enter the valid password').isLength({min:3}),
] ,(req, res) => {
    const result = validationResult(req);
    if(!result.isEmpty()){
        res.status(400).json({ errors: result.array() });
    }
    console.log(req.body);
    Adi.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(adi=>res.json(adi))
    .catch(err=>{console.log(err)
        res.status(400)
        res.json({error:"please enter a unique value for email",message:err.message})
      })
});
module.exports = router;
