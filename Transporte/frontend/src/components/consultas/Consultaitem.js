import React from 'react';
import '../../styles/components/pages/Consultas.css';

const Consultaitem = (props) => {
    const { pregunta, respuesta, imagen} = props;
    return (
        <section className="holder">

            <div className="chat-contacto">
                <img src="/imagenes/logoc.JPG" alt="cyberseguridad" id='Cyberw' />
                <h1>Cyberseguridad</h1>
            </div>
            <div className="chat-container">
                <div className="bubble-container right">
                    <div className="bubble">
                        <div className="bubble-text">
                            <div>
                                <span>{pregunta}</span>
                                <img src={imagen}/>

                                <div className="bubble-info">18:00</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bubble-container left">
                    <div className="bubble">
                        <div className="bubble-text">
                            <div>
                                <span>{respuesta}</span>
                                <div className="bubble-info">16:05</div>
                            </div>
                        </div>
                     </div>
                </div>
                <div>
                    <form>
                        <input type="text" name="" value="Escriba su consulta ..." />
                        <button><i className="fa-solid fa-paper-plane"></i>Enviar</button>
                    </form>

                </div>
            </div>
            </section>
    );
}
export default Consultaitem;
