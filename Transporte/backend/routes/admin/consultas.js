var express =require ('express');
var router = express.Router();
var consultasModel = require('../../models/consultasModel');

router.get('/', async function(req,res,next){

    var consultas=await consultasModel.getConsultas();
    res.render('admin/consultas',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        consultas
    });
});
module.exports =router;