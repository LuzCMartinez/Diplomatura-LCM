import '../../styles/components/layout/Footer.css';
import React from 'react';

const Footer =(props) => {
    return(
       <footer>
       
        <div className="container__footer">
            <div className="box__footer">
                <div className="logo">
                    
                </div>
                <div className="terms">
                    <p>Somos una empresa de cyberseguridad que surgio durante la pandemia para ayudar y concientizar a los usuarios sobre los cyberdelitos, dandoles herramientas y asesoria personalizada</p>
                </div>
            </div>
           

            <div className="box__footer">
                <h2>Cyberseguridad</h2>
                <a href="/">Home</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/consultas">Consultas</a>
                <a href="/contacto">Contacto</a>              
            </div>

            <div className="box__footer">
                <h2>Redes Sociales</h2>
                <a href="#"> <i className="bi bi-facebook"></i>Facebook</a>
                <a href="#"><i className="bi bi-twitter"></i> Twitter</a>
                <a href="#"><i className="bi bi-linkedin"></i> Linkedin</a>
                <a href="#"><i className="bi bi-instagram"></i> Instagram</a>
            </div>

        </div>
        <div className="box__copyright">
            <p>Todos los derechos reservados Cyberseguridad © 2022</p>
        </div>
        

       </footer>
    );
}
export default Footer;