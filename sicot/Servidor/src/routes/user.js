const express = require('express');
const router = express.Router();
const pool = require('../database.js');

//GET USERS

    router.get('/', async(req, res) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        let users = await pool.query('SELECT * FROM user');
        res.json({
            status: 200,
            message: "Se ha listado correctamente",
            users: users
        });
    });

//GET BY ID

    router.get('/:id', async(req, res) =>{
        const { id } = req.params;
        let user = await pool.query('SELECT * FROM user WHERE idUser = ?', [id]);
        res.json({
            status: 200,
            message: "Se ha encontrado el usuario",
            user : user
        });
    });

    //CREATE PERSON

router.post('/create', async(req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let { name, lastName} = req.body;
    const dataPerson = {
        name, lastName  
    };
  personInsert = await pool.query('INSERT INTO person set ?', [dataPerson]);
    
  const { insertId } = personInsert;
    const person = insertId;
   

    const {user, password} = req.body;
   
    const usuarioData = { user, password,rol:2, person };
    await pool.query('INSERT INTO user set ?', [usuarioData]);

    res.json({
        status: 200,
        message: "Se ha creado correctamente",
    });
});

    module.exports = router;