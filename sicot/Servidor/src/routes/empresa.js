const express = require('express');
const router = express.Router();
const pool = require('../database.js');
const XLSX = require('xlsx');





router.get('/', async(req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let users = await pool.query('SELECT * FROM empresa');
    res.json({
        status: 200,
        message: "Se ha listado correctamente",
        empresa : empresa
    });
});

function leerExcel(){
    const workbook = XLSX.readFile('https://docs.google.com/spreadsheets/d/1tlSeuk_Yugl5dSIXPO9-XbADGqpO7yJehXvdjvv6IQo/edit?usp=sharing');
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    console.log(dataExcel[0]);
    

    
}

leerExcel();

router.post('/load', async(req,res)=>{
    
    const workbook = XLSX.readFile('https://docs.google.com/spreadsheets/d/1tlSeuk_Yugl5dSIXPO9-XbADGqpO7yJehXvdjvv6IQo/edit?usp=sharing');
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    console.log(dataExcel[0]);

    // try {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     for (let i = 0; i < dataExcel.length; i++) {
    //         pool.query('INSERT INTO empresa set ?', dataExcel[i])
            
    //         console.log("Listo ")
    //     }
    //     res.json({
    //         status : 200,
    //         message: "OK"
    //     })
    // } catch (error) {
    //     console.log("Error")
    //     console.log(error);
    // }

    
    
    
    
});


module.exports = router;
