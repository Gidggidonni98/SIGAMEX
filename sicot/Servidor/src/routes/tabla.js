const express = require('express');
const router = express.Router();
const pool = require('../database.js');
const controller = require('../../controller/upload')
const XLSX = require('xlsx')    


function leerExcel(ruta) {
const workbook = XLSX.readFile(ruta);
const workbookSheets = workbook.SheetNames;
const sheet = workbookSheets;
const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);


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
}

router.post('/',
    controller.upload ,
    controller.uploadFile,
   
);


router.post('/crear', async(req, res) =>{
const workbook = XLSX.readFile('tablas.xlsx');
const workbookSheets = workbook.SheetNames;
const sheet = workbookSheets;
const isrMensual = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[0]]);
const subsidioMensual = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[1]]);
const isrQuincenal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[2]]);
const subsidioQuincenal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[3]]);
const isrSemanal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[4]]);
const subsidioSemanal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[5]]);

console.log(isrMensual[0])

// try {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     for (let i = 0; i < isrMensual.length; i++) {
//         pool.query('INSERT INTO isrmensual set ?', isrMensual[i])
//         console.log("Listo ")
//     }
//     for (let i = 0; i < isrMensual.length; i++) {
//         pool.query('INSERT INTO subsidiomensual set ?', subsidioMensual[i])
//         console.log("Listo ")
//     }
//     for (let i = 0; i < isrMensual.length; i++) {
//         pool.query('INSERT INTO isrquincenal set ?', isrQuincenal[i])
//         console.log("Listo ")
//     }
//     for (let i = 0; i < isrMensual.length; i++) {
//         pool.query('INSERT INTO subsidioquincenal set ?', subsidioQuincenal[i])
//         console.log("Listo ")
//     }
//     for (let i = 0; i < isrMensual.length; i++) {
//         pool.query('INSERT INTO isrsemanal set ?', isrSemanal[i])
//         console.log("Listo ")
//     }
//     for (let i = 0; i < isrMensual.length; i++) {
//         pool.query('INSERT INTO subsidiosemanal set ?', subsidioSemanal[i])
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

router.post('/actualizar', async(req, res) =>{
    const workbook = XLSX.readFile('tablas.xlsx');
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets;
    const isrMensual = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[0]]);
    const subsidioMensual = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[1]]);
    const isrQuincenal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[2]]);
    const subsidioQuincenal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[3]]);
    const isrSemanal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[4]]);
    const subsidioSemanal = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[5]]);
    
    pool.query('DELETE FROM isrmensual')
    pool.query('DELETE FROM isrquincenal')
    pool.query('DELETE FROM isrsemanal')
    pool.query('DELETE FROM subsidiomensual')
    pool.query('DELETE FROM subsidioquincenal')
    pool.query('DELETE FROM subsidiosemanal')
    
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        for (let i = 0; i < isrMensual.length; i++) {
            pool.query('INSERT INTO isrmensual set ?', isrMensual[i])
            console.log("Listo ")
        }
        for (let i = 0; i < isrMensual.length; i++) {
            pool.query('INSERT INTO subsidiomensual set ?', subsidioMensual[i])
            console.log("Listo ")
        }
        for (let i = 0; i < isrMensual.length; i++) {
            pool.query('INSERT INTO isrquincenal set ?', isrQuincenal[i])
            console.log("Listo ")
        }
        for (let i = 0; i < isrMensual.length; i++) {
            pool.query('INSERT INTO subsidioquincenal set ?', subsidioQuincenal[i])
            console.log("Listo ")
        }
        for (let i = 0; i < isrMensual.length; i++) {
            pool.query('INSERT INTO isrsemanal set ?', isrSemanal[i])
            console.log("Listo ")
        }
        for (let i = 0; i < isrMensual.length; i++) {
            pool.query('INSERT INTO subsidiosemanal set ?', subsidioSemanal[i])
            console.log("Listo ")
        }
        res.json({
            status : 200,
            message: "OK"
        })
    } catch (error) {
        console.log("Error")
        console.log(error);
    }
    });



module.exports = router;