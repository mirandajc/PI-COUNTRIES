import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Navbar() {
    return (
        <div>
            <img src='https://i.pinimg.com/564x/f2/94/d8/f294d808ea703c6a0364c98d68476805.jpg'alt="logo"/>
            <Search/>
            <Link to='/activity'>
                <button>Crear Nueva actividad</button>
            </Link>
        </div>
    )
}

export default Navbar;