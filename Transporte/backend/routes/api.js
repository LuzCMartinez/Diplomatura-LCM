var express =require ('express');
var router = express.Router();
var consultasModel = require('./../models/consultasModel');
var cloudinary = require ('cloudinary').v2;

router.get ('/consultas', async function(req, res,next){
   let consultas = await consultasModel.getConsultas();
    consultas = consultas.map(consultas=>{
        if (consultas.img_id){
            const imagen = cloudinary.url(consultas.img_id,{
                width:200,
                height: 100,
                crop: 'fill'
            });
            return{
                ...consultas,
                imagen
            }
        }else{
            return{
                ...consultas,
                imagen: ''
            }
        }

    });
    res.json(consultas);
});
module.exports = router;