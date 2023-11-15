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
                <h1> Bienvenidos</h1>
                <p> Somos Cyberseguridad LCM una empresa de seguridad informatica,creamos esta pagina para concientizar y ayudar al usuario ante un delito de Cyberseguridad.En esta plataforma encontraras toda la informacion necesaria y tambien podras dejarnos tus dudas.Contamos con asesores disponibles las 24 horas para ayudarte con todas tus consultas</p>
             <h2>¿Que es la cyberseguridad?</h2>
                <div className="respuesta">
                <span className="cita">
                La ciberseguridad es la práctica de proteger equipos, redes, aplicaciones de software, sistemas críticos y datos de posibles amenazas digitales. Las organizaciones tienen la responsabilidad de proteger los datos para mantener la confianza del cliente y cumplir la normativa. Utilizan medidas y herramientas de ciberseguridad para proteger los datos confidenciales del acceso no autorizado, así como para evitar interrupciones en las operaciones empresariales debido a una actividad de red no deseada. Las organizaciones implementan la ciberseguridad al optimizar la defensa digital entre las personas, los procesos y las tecnologías.
                </span>
                </div>
             <h2>¿Por que es tan importante la cyberseguridad?</h2>
             <div className="respuesta">
                <span className="cita">
                Las ciberamenazas mundiales siguen desarrollándose a un ritmo rápido, con una cantidad cada vez mayor de filtraciones de datos cada año. En un informe de RiskBased Security, se reveló que unos alarmantes 7900 millones de registros han sido expuestos por filtraciones de datos solo en los primeros nueve meses del 2019. Esta cifra es más del doble (112 %) de la cantidad de registros expuestos en el mismo período durante el 2018.
                </span>
               
            </div>
            
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