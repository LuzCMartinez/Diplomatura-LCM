import '../styles/components/pages/contactoPage.css';
import React, {useState} from 'react';
import axios from 'axios';
const ContactoPage = (props) =>{

    const initialForm ={
        nombre:'',
        email:'',
        telefo:'',
        mensaje:''
    }
    const [sending,setSending]= useState(false);
    const [msg,setMsg]= useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post ('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error ===false){
            setFormData(initialForm)
        }
    }

    return(
        <main className="holder contacto">
        <div>
            <h2>Contacto rapido</h2>
            <form action="/contacto" mathod="post" onSubmit={handleSubmit} className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/>  </p>
                 
                  {sending ? <p>Enviando...</p> : null }
                  {msg ? <p>{msg}</p> :null}
                
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de contacto</h2>
            <p>Tambien poder contactarte con nosotros a traves de:</p>
            <ul>
                <li>Teléfono: 46522920</li>
                <li>Email: contacto@cyberseguridadlcm.com.ar</li>
                <li>Facebook: CyberseguridadLCM</li>
                <li>Twitter: CyberseguridadLCM</li>

            </ul>
        </div>

    </main>
    )
}
export default ContactoPage;