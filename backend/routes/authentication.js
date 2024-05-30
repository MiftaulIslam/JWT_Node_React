const express = require("express");
const cors = require('cors');
const { register } = require("../controllers/authentication/register");
const { login } = require("../controllers/authentication/login");
const corsOptions = {
    origin: 'http://localhost:5173', // the origin of your Angular app
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };
const router = express.Router();

router.post("/register",cors(corsOptions), register);
router.post("/login",cors(corsOptions), login);
router.post("/logout",cors(corsOptions),async (req, res)=>{
    res.clearCookie('jwt'); 
    res.json({ message: 'Logout successful' });
  
});

module.exports = router;
