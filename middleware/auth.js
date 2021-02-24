const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer", "").trim();
    console.log("Token: ", token);
    try {
        const data = jwt.verify(token, process.env.JWT_KEY); 
        console.log("Verified: ", data);
        //add new attribute user to req object
        //don't call db to get user object here 
        //as not every endpoint that needs auth will need user object
        req.user = data;
        next();

    } catch (error) {
        console.log(JSON.stringify(error));
        console.log(error.stack);
        res.status(401).send({ error: "Not authorized to access this resource" });
    }
};

module.exports = auth;