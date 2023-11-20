import '../styles/components/pages/Consultas.css';
import React from 'react';
const Consultas =(props)=> {
    return(
        <section className="holder">

           <div className="chat-contacto">
           <img src="imagenes/logoc.JPG" alt="cyberseguridad" id='Cyberw'/>
            <h1>Cyberseguridad</h1>
           </div>
           <div className="chat-container">
           
            <div className="bubble-container right">
                <div className="bubble">
                    <div className="bubble-text">
                        <div>
                            <span>¿Es seguro conectarse a redes Wifi públicas?</span>
                            <div className="bubble-info">16:05</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bubble-container left">
                <div className="bubble">
                    <div className="bubble-text">
                        <div>
                            <span>Hola somos Cyberseguridad</span>
                            <div className="bubble-info">16:05</div>
                        </div>
                    </div>
                </div>

                <div className="bubble">
                    <div className="bubble-text">
                        <div>
                            <span>No, aunque tengan contraseña o no, las redes Wifi públicas pueden ser accedidas por
                                personas con intenciones maliciosas</span>
                            <div className="bubble-info">16:10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bubble-container right">
                <div className="bubble">
                    <div className="bubble-text">
                        <div>
                            <span>¿Qué cosas puedo hacer en un wifi público?</span>
                            <div className="bubble-info">18:00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bubble-container left">
                <div className="bubble">
                    <div className="bubble-text">
                        <div>
                            <span>Hola somos Cyberseguridad</span>
                            <div className="bubble-info">18:05</div>
                        </div>
                    </div>
                </div>
                <div className="bubble">
                    <div className="bubble-text">
                        <div>
                            <span>Cualquier actividad que no involucre el ingreso de información privada, como por
                                ejemplo:
                                ver noticias, escuchar música, mirar videos o leer un blog.</span>
                            <div className="bubble-info">18:10</div>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <input type="text" name="" value="Escriba su consulta ..."/>
                <button><i className="fa-solid fa-paper-plane"></i>Enviar</button>
            </form>

        </div>
        </section>
    );
}
export default Consultas;