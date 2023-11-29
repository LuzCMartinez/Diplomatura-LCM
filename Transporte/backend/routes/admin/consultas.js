var express =require ('express');
var router = express.Router();
var consultasModel = require('../../models/consultasModel');
const utill = require ('util');
const cloudinary = require ('cloudinary').v2;
const uploader = utill.promisify(cloudinary.uploader.upload);
const destroy = utill.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req,res,next){
    var consultas = await consultasModel.getConsultas();
    consultas = consultas.map(consulta => {
        if(consulta.img_id){
            const imagen = cloudinary.image(consulta.img_id, {
                width:100,
                height:100,
                crop:'fill'
            });
            return{
                ...consulta,
                imagen
            }
        } else{
            return{
                ...consulta,
                imagen:''
            }
        }
    });
    res.render('admin/consultas',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        consultas
    });
});
router.get('/agregar',(req,res,next)=>{
    res.render('admin/agregar',{
        layout:'admin/layout'
    })
});
router.post('/agregar', async(req,res,next)=>{
    try{
        var img_id = '';
        if (req.files && Object.keys(req.files).length >0){
            imagen = req.files.imagen;
            img_id = (await uploader (imagen.tempFilePath)).public_id;
        }

        if (req.body.pregunta !="" && req.body.respuesta!=""){
            
                await consultasModel.insertConsulta({
                    ...req.body,
                    img_id
                });
                res.redirect('/admin/consultas')
            }else{
                res.render('admin/agregar',{
                    layout:'admin/layout',
                    error: true,
                    message:'Todos los campos son requeridos'

                })
            }
        }catch (error) {
            console.log(error)
            res.render('admin/agregar',{
                layout: 'admin/layout',
                error: true,
                message:'No se cargo la consulta'
            })
        }
    })
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
       let img_id = req.body.img_original;
       let borrar_img_vieja= false;
       if(req.body.img_delete === "1"){
        img_id = null;
        borrar_img_vieja = true;
       }else{
        if(req.files && Object.keys(req.files).length>0){
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }
       }
        if (borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }
        var obj= {
            pregunta: req.body.pregunta,
            respuesta:req.body.respuesta,
            img_id

        }
        await consultasModel.modificarConsultasById(obj, req.body.id);
        res.redirect('/admin/consultas');
    }catch (error){
        console.log(error)
        res.render('admin/modificar',{
            layout: 'admin/layout',
            error: true,
            message:'No se modifico la consulta'
        })
    }
})
router.get('/eliminar/:id', async (req,res,next)=>{
    var id = req.params.id;
    await consultasModel.deleteConsultasById(id);
    res.redirect('/admin/consultas')
});

       

module.exports =router;