import React from "react";
import style from  './Paginacion.module.css'
// import button from './anteriorButton.png'

function Paginacion({pag, setPag, max, input, setInput}){
console.log(input)
    const nextPage = () => {
        if( input + 1 <= max){
            setInput(input + 1);
            setPag( pag + 1)
        }
        
    }
    const prevPage = () => {
        if( input -1 >= 1){
            setInput    (input -1);
            setPag  (pag - 1)
        } 
    }

    function handlePagination(e) {
        if(e.target.value <= max && e.target.value >= 0) {
            setInput(input = e.target.value)
            setPag(e.target.value)
        } else {
            alert(`El num de Pag deber ser mayor o igual a 1 y menor o igual a ${max}`)
        }
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