const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserScheme = require("../../models/UserScheme");

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ error: "Email and password are required", auth: false });
    const user = await UserScheme.findOne({ email });
    if (!user)
      return res.status(404).json({ error: "User not found", auth: false });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid credentials", auth: false });
    try {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
      res.cookie("jwt", token,{
        httpOnly: true,
        sameSite: 'Lax', 
        secure: false, 
    });
      res.status(200).json({
        message: "User logged in successfully",
        auth: true,
        token: token,
      });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Internal server error", auth: false });
    }
  }
  module.exports = {login}