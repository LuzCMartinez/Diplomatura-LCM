import '../styles/components/pages/HomePage.css';
import React from 'react';
const HomePage =(props)=> {
    return(
       <main className="holder">
        <div className="homeimg">
            <img src='' alt=''/>
        </div>
         <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p> Somos Cyberseguridad LCM una empresa de seguridad informatica,creamos esta pagina para concientizar y ayudar al usuario ante un delito de Cyberseguridad.En esta plataforma encontraras toda la informacion necesaria y tambien podras dejarnos tus dudas</p>
            </div>
            <div className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
                <span className="cita">Excelente, me ayudaron en una emergencia</span>
                <span className="autor">Gabriela Muñiz - victima de cyber estafas</span>
            </div>
            </div>
         </div>
       </main>
    );
}
export default HomePage;