import React from "react";
import style from  './Paginacion.module.css'
import button from './anteriorButton.png'

function Paginacion({pag, setPag, max, input, setInput, handlePagination}){

    const nextPage = () => {
        setInput(input + 1);
        setPag( pag + 1)
    }
    const prevPage = () => {
        setInput    (input -1);
        setPag  (pag - 1)
    }



    return (
        <div className={style.contenedor}>
            <button className={style.anterior} onClick={prevPage} >ANTERIOR</button>
            <input className={style.numeros} max={max} min='1' name="pag" autoComplete="off" value={input} onChange={(e)=> handlePagination(e)} />
            <button className={style.numeros}>de {max}</button>
            <button className={style.siguiente} onClick={nextPage} >SIGUIENTE</button>
        </div>
    )
}

export default Paginacion;