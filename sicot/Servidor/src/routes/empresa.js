const express = require('express');
const router = express.Router();
const pool = require('../database.js');
const XLSX = require('xlsx');





router.get('/', async(req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let empresa = await pool.query('SELECT * FROM empresa');
    res.json({
        status: 200,
        message: "Se ha listado correctamente",
        empresa : empresa
    });
});


router.get('/:id', async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { id } = req.params;
    let empresa = await pool.query('Select * from empresa where idEmpresa = ?', [id]);
    res.json({
        status: 200,
        message: "Se ha obtenido correctamente",
        empresa: empresa
    });
});

router.post('/create', async(req,res)=>{
    
    const { razon, rfc, regPat, prima, entidad, impNom } = req.body;
    const empresa = {
        razon, rfc, regPat, prima, entidad, impNom
    };
    await pool.query('INSERT INTO empresa SET ?' , [empresa]);
    res.json({
        status: 200,
        message: "Se ha creado correctamente",
        empresa : empresa
    });
    
});

router.post('/update/:id', async(req, res) =>{
    const { id } = req.params;
    const { razon, rfc, regPat, prima, entidad, impNom } = req.body;
    const empresa = {
        razon, rfc, regPat, prima, entidad, impNom
    };

    await pool.query('UPDATE empresa set ? where idEmpresa = ?', [empresa, id]);
    res.json({
        status: 200,
        message: "Se ha actualizado correctamente",
        empresa : empresa
    });
});

router.post('/delete/:id', (req,res) =>{
    const { id } = req.params;
    pool.query('DELETE FROM empresa WHERE idEmpresa = ?', [id]);
    res.json({
        status: 200,
        message: "Se ha eliminado correctamente"
    });
})


module.exports = router;


// const workbook = XLSX.readFile('empresas.xlsx');
// const workbookSheets = workbook.SheetNames;
// const sheet = workbookSheets[0];
// const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
// console.log(dataExcel[0]);

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