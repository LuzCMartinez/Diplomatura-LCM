import React from 'react';
const HomePage =(props)=> {
    return(
       <main className="holder">
        <div className="homeimg">
            <img src='' alt=''/>
        </div>
         <div className="colum">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>lorem </p>
            </div>
            <div className="testimonios right"></div>
            <h2>Testimonios</h2>
            <div className="testimonio">
                <span className="cita">fgh</span>
                <span className="autor">fg</span>
            </div>
         </div>
       </main>
    );
}
export default HomePage;