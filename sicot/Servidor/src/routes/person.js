
const express = require('express');
const router = express.Router();
const pool = require('../database.js');


//GET PERSONS

router.get('/', async(req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let users = await pool.query('SELECT * FROM person');
    res.json({
        status: 200,
        message: "Se ha listado correctamente",
        users: users
    });
});






module.exports = router;