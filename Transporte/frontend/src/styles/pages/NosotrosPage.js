import '../styles/components/pages/NosotrosPage.css';
const NosotrosPage =(props) => {
return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>A principios de los años 70 apareció Creeper, el primer malware, el cual llegaba a las computadoras a través de ARPANET en contra respuerta surgio el primer antivirus Reaper</p>
                <p>Hoy en día todavía sigue siendo una de las formas más eficaces para vulnerar una empresa, con frecuencia por falta de formación y concienciación. La mejor forma de mitigar este problema, es un plan de cultura de ciberseguridad, donde se establezca una formación inicial ante esta problematica surgio la idea de crear esta web para ayudarte</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="imagenes/lucia.jpg" alt="Lucia Cabrera"/>
                            <h5>Lucia Cabrera</h5>
                            <h6>Fundadora</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas itaque aut amet maiores corrupti hic. Cumque quia consectetur unde placeat ea quod nobis optio sit assumenda. Unde, pariatur maiores!</p>
                       </div>
                    <div className="persona">
                        <img src="imagenes/cristian.jpg" alt="Cristian Lopez"/>
                            <h5>Cristian Lopez</h5>
                            <h6>Gerente de planta</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas itaque aut amet maiores corrupti hic. Cumque quia consectetur unde placeat ea quod nobis optio sit assumenda. Unde, pariatur maiores!</p>
                        </div>
                    <div className="persona">
                        <img src="imagenes/mateo.jpg" alt="Mateo Rodriguez"/>
                            <h5>Mateo Rodriguez</h5>
                            <h6>Experto en hacking etico</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas itaque aut amet maiores corrupti hic. Cumque quia consectetur unde placeat ea quod nobis optio sit assumenda. Unde, pariatur maiores!</p>
                       </div>
                    <div className="persona">
                        <img src="imagenes/milagros.jpg" alt="Milagros Perez"/>
                            <h5>Milagros Perez</h5>
                            <h6>Experta en Cyberseguridad</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas itaque aut amet maiores corrupti hic. Cumque quia consectetur unde placeat ea quod nobis optio sit assumenda. Unde, pariatur maiores!</p>
                        </div>
                    <div className="persona">
                        <img src="imagenes/carla.jpg" alt="Carla Martin"/>
                            <h5>Carla Martin</h5>
                            <h6>Licenciada en comunicación</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas itaque aut amet maiores corrupti hic. Cumque quia consectetur unde placeat ea quod nobis optio sit assumenda. Unde, pariatur maiores!</p>
                    </div>

                </div>
            </div>
        </main>
);
}
export default NosotrosPage;