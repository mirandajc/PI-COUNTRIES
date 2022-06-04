import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { allCountries, createActivity} from '../../Redux/actions'

function CreateActivity() {
    const [state, setState] = useState({
        name: '',
        difficulty: 0,
        duration: '',
        season: '',
        countries: [],
    });
    const { countries } = useSelector( state => state);
    const dispatch = useDispatch();
    const navegate = useNavigate()
    useEffect(()=> {
        dispatch(allCountries())
        // dispatch(clearActivity())
    },[dispatch])

    

    function handleSelect(e) {
        setState({
            ...state,
            countries: [...state.countries, e.target.value],
            
        })
    }

    function handleChange(e) {
        setState({
            ...state, // copia de datos para no eliminar lo que ya escribimos 
            [e.target.name]: e.target.value
        })
    }

    function handleChoose(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value            
        })
    }
    function handleRemove(e) {
        setState({
            ...state,
            countries: state.countries.filter(country => (country !== e.target.value))
        })
    }
    function handleSumit(e) {
            if(!state.name || !state.difficulty || !state.duration || !state.season || !state.countries){
                alert('llenar todos los campos')
            }
                    e.preventDefault();
            dispatch(createActivity(state))
            setState({
                name: '',
                difficulty: 0,
                duration: '',
                season: '',
                countries: [],
            })
            navegate('/countries')
            
            // if(state.name.length < 2 ){
            //     alert('El nombre debe contener mas de 2 palabras')
            // }
        
    }


    return (
        <div>
            <nav>
            <Link to='/countries' ><button>Volver</button></Link>
            </nav>
            <section>
            <form onSubmit={handleSumit}>
                <label  htmlFor='nombre' >Nombre</label>
                    <input type='text'  name="name" value={state.name} onChange={(e)=>{handleChange(e)}}/>
                <label  htmlFor='nombre' >Duracion</label>
                    <input name="duration" value={state.duration}  type='time'  min="01:00" max="12:00"  onChange={(e)=>{handleChange(e)}}/>
                <label>Difucultad</label>
                    <label><input type="radio" value='1' name='difficulty' onChange={(e) => handleChoose(e)}/>1</label>
                    <label><input type="radio" value='2' name='difficulty' onChange={(e) => handleChoose(e)}/>2</label>
                    <label><input type="radio" value='3' name='difficulty' onChange={(e) => handleChoose(e)}/>3</label>
                    <label><input type="radio" value='4' name='difficulty' onChange={(e) => handleChoose(e)}/>4</label>
                    <label><input type="radio" value='5' name='difficulty' onChange={(e) => handleChoose(e)}/>5</label>
                <label>Temporada</label>
                     <label><input type="radio" value='Summer' name='season' onChange={(e) => handleChoose(e)}/>Summer</label>
                     <label><input type="radio" value='Autumn' name='season' onChange={(e) => handleChoose(e)}/>Autumn</label>
                     <label><input type="radio" value='Winter' name='season' onChange={(e) => handleChoose(e)}/>Winter</label>
                     <label><input type="radio" value='Spring' name='season' onChange={(e) => handleChoose(e)}/>Spring</label>
                <label>Country</label>
                    <select onChange={(e)=> handleSelect(e)}>
                    {countries?.map(element=> {
                        return (
                            <option value={element.id} key={element.id}>{element.name}</option>
                        )
                    })}
                    </select>
                    {state.countries?.map(country => {
                        return (
                            <div>
                                <p >{countries.find(c => c.id === country).name}</p>
                                <button value={country} type="button" onClick={(e)=>handleRemove(e)} >x</button>
                            </div>
                        )
                    })}
                <button type="submit">Crear nueva actividad</button>
            </form>
            </section>
        </div>
    )
}

export default CreateActivity;