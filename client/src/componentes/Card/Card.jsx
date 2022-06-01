import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

function Card({flags, name, continents, id}) {
    return (
        <div className={styles.borde}>
            <img className={styles.card} src={flags} alt="flag"/>
            <h2>{name}</h2>
            <h2>{continents}</h2>
            <Link to={`/countries/${id}`} >
                <button>Detalle</button>
            </Link>
            
        </div>
    )
}

export default Card;