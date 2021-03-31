const express = require('express');
const auth = require('../modules/authentication.js');
const User = require('../Schema/UserInfo.js');

const router = express.Router();

router.post('/', async (req, res) => {
    if(!req.headers.jwt) {
        res.status(403).json({
            message: "unauthorized"
        });
        return;
    }

    console.log("/auth -> " + auth.VerifyJwt(req.headers.jwt).email);

    let authObj = auth.VerifyJwt(req.headers.jwt);
    if(!authObj) {
        res.status(403).json({
            message: "Unauthorized"
        });
        return;
    }

    let err, user = await User.findOne({ _id: authObj.id });
    if(err || !user) {
        res.status(403).json({
            message: "User not found, please sign out and try again"
        });
        return;
    }

    res.status(200).json({
        authorized: true,
        isAdmin: user.isAdmin,
        user: user
    });
});

module.exports = router;