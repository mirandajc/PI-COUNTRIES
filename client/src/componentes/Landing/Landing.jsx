import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <Link to='/countries'>
           <button>Vamos a home</button>
           </Link>
        </div>
    )
}

export default Landing;