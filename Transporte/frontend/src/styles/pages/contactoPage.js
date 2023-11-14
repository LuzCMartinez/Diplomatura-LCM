const ContactoPage = (props) =>{
    return(
        <main className="holder contacto">
        <div>
            <h2>Contacto rapido</h2>
            <form action="" mathod="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/> 
                  
                </p>
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