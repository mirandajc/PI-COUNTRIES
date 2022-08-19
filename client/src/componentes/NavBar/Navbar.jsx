import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import logo from './logoHome.png'
import style from './Navbar.module.css'

function Navbar({setInput, setPag}) {
    // const { width } = React.useViewport();

    console.log(React.useViewport)
    return (
        <nav className={style.contenedor}>
            <div>
            <Link to='/' >
            <img  className={style.logo} src={logo}alt="logo"/>
            </Link>
            </div>
            <div >
            <Search setInput={setInput} setPag={setPag}/>
            </div>
            <div >
            <Link to='/activity' className={style.textCreate}>
                <button className={style.nuevaActividad} >NUEVA ACTIVIDAD</button>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar;