var express =require ('express');
var router = express.Router();
var consultasModel = require('./../models/consultasModel');
var cloudinary = require ('cloudinary').v2;
var nodemailer = require ('nodemailer');

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
router.post('/contacto', async (req,res)=>{
    const mail ={
        to:'flavia.ursino@gmail.com',
        subject: 'Contacto web',
        html:`${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
        }
        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth:{
                user: process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
        });
        await transport.sendMail(mail)
        res.status(201).json({
            error:false,
            message: 'Mensaje enviado'
        });
});
module.exports = router;