import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { countryByName } from "../../Redux/actions";
// import Paginacion from "../Paginacion/Paginacion";
import style from "./Search.module.css"
// import Paginacion from '../Paginacion/Paginacion'

function Search({setInput, setPag}) {
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
        setInput(1)
        setPag(1)
    }

    return (
        <div className={style.contenedor} >
            <input className={style.input} type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Por ejemplo: Argentina"/>
            <button className={style.button} onClick={e=> handleSumit(e)} >BUSCAR</button>
        </div>
    )
}

export default Search;