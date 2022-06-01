import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { countryByName } from "../../Redux/actions";


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
        <div>
            <input type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Ingresa el nombre del pais..."/>
            <button onClick={e=> handleSumit(e)} >Buscar</button>
        </div>
    )
}

export default Search;