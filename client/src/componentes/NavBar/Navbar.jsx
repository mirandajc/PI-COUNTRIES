import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import logo from './logoHome.png'
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.contenedor}>
            <div>
            <Link to='/' >
            <img  className={style.logo} src={logo}alt="logo"/>
            </Link>
            </div>
            <div >
            <Search/>
            </div>
            <div >
            <Link to='/activity'>
                <button className={style.nuevaActividad} >NUEVA ACTIVIDAD</button>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar;