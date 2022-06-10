import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  countryById } from '../../Redux/actions'
import styles from './Details.module.css'
import Navbar from '../NavBar/Navbar'
import loading from './logoapp1-01.png'
import { Link } from "react-router-dom";

function Details() {
    const { detail } = useSelector(state=> state);
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(countryById(id))
    },[dispatch, id])


    return (
        <div>
            {/* <Navbar/> */}
            {detail.name ? 
            <>
            <header className={styles.header}>
                
            <Link to='/countries'>
            <button className={styles.volver}>Volver</button>
            </Link> 
            <div>Descripcion de {detail.name}</div></header>
            
            <section className={styles.contenedor}>
            <img src={detail.flags}  className={styles.imagen} alt='flags'/>
            <div className={styles.detalles}>
            <p>Nombre: {detail.name}</p>
            <p>ID: {detail.id}</p>
            <p>Capital: {detail.capital}</p>
            <p>Poblacion: {detail.population}</p>
            <p>Area: {detail.area}</p>
            <p>Subregion: {detail.subregion}</p>
            </div>
            </section>
            <section className={styles.activity}>
            {detail.activities?.map( actividad =>
                { return (
                    <article key={Math.random().toString(36).substr(2, 9)}>
                        <div className={styles.boxActivity}>
                        <h3>Actividad</h3>
                    <p>Nombre: {actividad.name}</p>
                    <p>Dificultad: {actividad.difficulty}</p>
                    <p>Temporada: {actividad.season}</p>
                    <p>Duracion: {actividad.duration}</p>
                    </div>
                    </article>

                )}
            )} 
            </section> 
            </>
            : <div  className={styles.loading}>
                <img src={loading}  className={styles.imagenLoading}/>
            </div>
            }
        </div>
    )
}

export default Details;