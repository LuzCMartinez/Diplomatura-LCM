import '../../styles/components/layout/Footer.css';
import React from 'react';

const Footer =(props) => {
    return(
       <footer>
        <p>Derechos reservados.Cyberseguridad @2023</p>
        <div className="container__footer">
            <div className="box__footer">
                <div className="logo">
                    
                </div>
                <div className="terms">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto officia praesentium atque laudantium, nam deleniti sapiente deserunt.</p>
                </div>
            </div>
           

            <div className="box__footer">
                <h2>Cyberseguridad</h2>
                <a href="/">Home</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/novedades">Novedades</a>
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
        

       </footer>
    );
}
export default Footer;