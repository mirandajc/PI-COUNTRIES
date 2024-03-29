import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { countryByName } from "../../Redux/actions";
// import Paginacion from "../Paginacion/Paginacion";
import style from "./Search.module.css"
// import Paginacion from '../Paginacion/Paginacion'
import useWindowDimensions from "../Hook/useWindowsDimensions";
import Lupa from "./lupa.png";
function Search({setInput, setPag}) {
    const { width } = useWindowDimensions();
    const movil = 460;
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
    if(width> movil){
        return (
        <div className={style.contenedor} >
            <input className={style.input} type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Por ejemplo: Argentina"/>
            <button className={style.button} onClick={e=> handleSumit(e)} >BUSCAR</button>
        </div>
    )
    } else {
        return (
            <div className={style.contenedor_movil} >
                <input className={style.input_movil} type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Buscar Pais"/>
                    <button className={style.button_movil} onClick={e=> handleSumit(e)} >
                        <img src={Lupa} className={style.button_movil_img} alt="img_button_search"/>
                    </button>
                
            </div>
        )
    }
    
}

export default Search;