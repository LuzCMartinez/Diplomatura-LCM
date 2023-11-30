import { useState, useEffect } from "react";
import axios from 'axios';
import Consultasitem from "../components/consultas/Consultaitem";

const Consultas = (props)  => {
    const [loading, setLoading]= useState(false);
    const [consultas, setConsultas] = useState([]);
    useEffect(()=>{
        const cargarConsultas = async () =>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/consultas');
            setConsultas(response.data);
            setLoading(false);
        };
        cargarConsultas();
    },[]);
    return(
        <section className="holder">
        <h2>Consultas</h2>
        { 
            loading ? (
            <p>Cargando...</p>
        ) : (
            consultas.map(item => <Consultasitem key ={item.id}
                pregunta= {item.Pregunta} respuesta = {item.Respuesta}
                imagen={item.imagen}/>)
        )
} </section>
)};
export default Consultas;