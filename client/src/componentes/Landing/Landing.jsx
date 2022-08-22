import React from "react";
import { Link } from "react-router-dom";
import style from './Landing.module.css'
import logo from './logoHome.png'
// import Footer from "../Footer/Footer";
// import github from './icone-github-noir.png'
// import linkedin from './logo-linkedin-removebg-preview.png'
function Landing() {
    return (
        
        <div className={style.imagen}>
            <div className={style.contenedor}>
                <div className={style.countryLogo}>
                    <div className={style.contenedorLogo} >
                        <div>
                            <p className={style.country}>COUNTRY</p>
                        </div>
                        <div>
                            <img src={logo} alt="logo"  className={style.logo}/>
                        </div>
                    </div>
                        <div className={style.descripcion}>
                            <p>Planifica tus propias actividades rapido y facil, podes agregar mas de un pais, temporada en la que se puede realizar, duracion y dificultad.</p>
                        </div>
                </div>
                <div className={style.home}>
                    <Link to='/countries'>
                    <button className={style.button}>INICIO</button>
                    </Link> 
                </div>
            </div>
            {/* <Footer/> */}
            {/* <div className={style.footer}>
                <div>
                    <p >Trabajo individual Henry</p>
                </div>
                <div>
                    <Link to='https://github.com/mirandajc'>
                    <a href="https://github.com/mirandajc"><img src={github} className={style.github} alt="" /></a>
                        
                    </Link>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jocelynmiranda/"><img src={linkedin} className={style.linkedin} alt /></a>
                    
                </div>
            </div> */}
        </div>
    )
}

export default Landing;