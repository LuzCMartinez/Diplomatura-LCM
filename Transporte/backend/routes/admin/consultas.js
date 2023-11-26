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
router.get('/agregar',(req,res,next)=>{
    res.render('admin/agregar',{
        layout:'admin/layout'
    });
});
router.get('/modificar/:id', async (req,res,next)=>{
  let id = req.params.id;
  let consulta = await consultasModel.getConsultasById(id);
  res.render('admin/modificar',{
    layout: 'admin/layout',
    consulta
  });
});
router.post('/modificar', async (req,res,next)=>{
    try{
        let obj={
            pregunta:req.body.pregunta,
            respuesta: req.body.respuesta
        }
        await consultasModel.modificarConsultasById(obj, req.body.id);
        res.redirect('/admin/consultas');
    }catch(error){
        console.log(error)
        res.render('admin/modificar',{
            layout:'admin/layout',
            error: true, message: 'No se modifico la consulta'
        })
    }
})
router.get('/eliminar/:id', async (req,res,next)=>{
    var id = req.params.id;
    await consultasModel.deleteConsultasById(id);
    res.redirect('/admin/consultas')
});
router.post('/agregar',async(req,res,next)=>{
    try{
        if (req.body.pregunta!="" && req.body.respuesta!=""){
            await consultasModel.insertConsulta(req.body);
            res.redirect('/admin/consultas')
        }else{
            res.render('admin/agregar',{
                layout:'admin/layout',
                error: true, message:'Todos los campos son requeridos'
            })
        }
    }catch (error){
        console.log(error)
        res.render('admin/agregar',{
            layout: 'admin/layout',
            error:true, message:'No se cargo la novedad'
        });
    }
})
module.exports =router;