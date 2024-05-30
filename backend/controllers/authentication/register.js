const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const UserScheme = require("../../models/UserScheme");

const register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });
  
    const duplicate = await UserScheme.findOne({ email });
    if (duplicate) return res.status(403).json({ error: "User already exists" });
  
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.PWD_SALT)
    );
    const user = new UserScheme({
      username: username,
      email: email,
      password: hashedPassword,
    });
  
    try {
      await user.save();
      res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ error: "Internal server error"});
    }
  }

module.exports = {register}