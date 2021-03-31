const express = require('express');
const mongoose = require('mongoose');
const User = require('../Schema/UserInfo.js')
const auth = require('../modules/authentication.js');
const router = express.Router();

router.post('/', async (req, res) => {
    if(
        !req.body.user ||
        !req.body.user.email ||
        !req.body.user.fullname ||
        !req.body.user.password ||
        !req.body.user.phone ||
        !req.body.user.address ||
        !req.body.user.address.street ||
        !req.body.user.address.number ||
        !req.body.user.address.zip ||
        !req.body.user.address.city
    ) {
        res.status(400).json({
            message: "missing values"
        });
        return;
    }

    console.log("/register -> " + req.body.user.email);

    let err, data = await User.findOne({ email: req.body.user.email });
    if(err) {
        res.status(503).json({ 
            message: "An error has occured"
        });
        return;
    }

    if(data != null) {
        res.status(409).json({
            message: "Email already in use"
        });
        return;
    }
    
    let hash = await auth.HashString(req.body.user.password);
    
    if(!hash){
        res.status(424).json({
            message: "An error has occured try again later"
        });
        return;
    }

    let user = new User(req.body.user);
    user._id = mongoose.Types.ObjectId();
    user.password = hash;

    let jwt = auth.SignJwt({id: user._id, email: req.body.user.email});

    user.save();
    res.status(200).res.json({
        jwt: jwt,
        message: "Success"
    });
});

module.exports = router;