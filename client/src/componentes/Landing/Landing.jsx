import React from "react";
import { Link } from "react-router-dom";
import style from './Landing.module.css'
import logo from './logoHome.png'
function Landing() {
    return (
        
        <div className={style.imagen}>
            <div className={style.contenido}>
            <div>
                <div >
                    <p className={style.descripcion} >
                    CREA TUS PROPIAS ACTIVIDADES 
                    SEGUN TU ITINERARIO
                    </p>
                </div>
                
            </div>
            <div>
                    <img src={logo} alt="logo"  className={style.logo}/>
                </div>
            <div >
                <Link to='/countries'>
                <button className={style.buttonHome}>INICIO</button>
                </Link> 
            </div>
            <div className={style.informacion}>
                <p >Trabajo individual Henry</p>
            </div>
            </div>
        </div>
    )
}

export default Landing;