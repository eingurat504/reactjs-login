const express = require("express");
const router = express.Router();

async function index(req, res) {  
    res.json({ message: 'WELCOME TO THE REACT JS API'});
}

module.exports = {
  index
}