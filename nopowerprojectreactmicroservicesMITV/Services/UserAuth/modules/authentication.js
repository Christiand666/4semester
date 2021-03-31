const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const saltrounds = 2;

let GenerateToken = () => {
    var token = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 100; i++)
      token += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return token;
}

let GetSalt = async () => {
    let err, salt = await bcrypt.genSalt(saltrounds);
    if(err) return null;
    return salt;
}

let HashString = async (str) => {
    let salt = await GetSalt();
    if(!salt) return null;

    let errHash, hash = await bcrypt.hash(str, salt);
    if(errHash) return null;
    return hash;
}

let Compare = async (plain, hash) => {
    return await bcrypt.compare(plain, hash);
}

let SignJwt = (store) => {
    return jwt.sign(store, process.env.SECRET);
}

let VerifyJwt = (token) => {
    return jwt.verify(token, process.env.SECRET);
}

module.exports = { 
    HashString: HashString, 
    Compare: Compare, 
    GenerateToken, GenerateToken, 
    SignJwt: SignJwt, 
    VerifyJwt: VerifyJwt 
};