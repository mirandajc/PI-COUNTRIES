import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  countryById } from '../../Redux/actions'
import styles from './Details.module.css'
import Navbar from '../NavBar/Navbar'

function Details() {
    const { detail } = useSelector(state=> state);
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(countryById(id))
    },[dispatch, id])


    return (
        <div>
            <Navbar/>
            <header className={styles.header}>Descripcion de {detail.name}</header>
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
        </div>
    )
}

export default Details;