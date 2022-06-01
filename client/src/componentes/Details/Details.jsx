import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  countryById } from '../../Redux/actions'
import styles from './Details.module.css'

function Details() {
    const { detail } = useSelector(state=> state);
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(countryById(id))
    },[dispatch, id])


    return (
        <div>
            <img src={detail.flags}  className={styles.imagen} alt='flags'/>
            <h1>Nombre: {detail.name}</h1>
            <h2>ID: {detail.id}</h2>
            <h2>Capital: {detail.capital}</h2>
            <h2>Poblacion: {detail.population}</h2>
            <h2>Area: {detail.area}</h2>
            <h2>Subregion: {detail.subregion}</h2>
            <div>
                {detail.activities?.map( actividad =>
                    { return (
                        <div >
                            <h1>Actividad</h1>
                        <p>{actividad.name}</p>
                        <p>{actividad.difficulty}</p>
                        <p>{actividad.season}</p>
                        <p>{actividad.duration}</p>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Details;