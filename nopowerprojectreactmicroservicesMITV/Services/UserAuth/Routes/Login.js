const express = require('express');
const User = require('../Schema/UserInfo.js');
const auth = require('../modules/authentication.js')
const router = express.Router();

router.post('/', async (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.status(400).json({ 
            message: "missing values" 
        });
        return
    }

    console.log('/login -> ' + req.body.email);

    let err, user = await User.findOne({ email: req.body.email });
    if(err || !user) {
        res.status(503).json({
            message: "an error has occurred"
        });
        return;
    }

    if(!(await auth.Compare(req.body.password, user.password))){
        res.status(401).json({
            message: "Wrong email or passsword"
        });
        return;
    }

    let jwt = auth.SignJwt({ id: user._id, email: req.body.email });
    res.status(200).json({
        jwt: jwt,
        message: "Success"
    });
});

module.exports = router;