import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { countryByName } from "../../Redux/actions";
import style from "./Search.module.css"

function Search() {
    const [name, setName] = useState(''); 
    const dispatch = useDispatch();
    
    function handleChange(e) {
        setName(
            e.target.value
        )
    }
    
    function handleSumit(e) {
        e.preventDefault()
        dispatch(countryByName(name))
        setName('')
    }

    return (
        <div className={style.contenedor} >
            <input className={style.input} type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Ingresa el nombre del pais..."/>
            <button className={style.button} onClick={e=> handleSumit(e)} >BUSCAR</button>
        </div>
    )
}

export default Search;