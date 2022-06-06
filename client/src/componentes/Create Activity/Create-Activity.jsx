import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allCountries, createActivity} from '../../Redux/actions'
import styles from './Create.module.css'

function CreateActivity() {
    const [error, setError] = useState(false);
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

            e.preventDefault();
            const { name, difficulty, duration , season, countries} = state;
            if (!name.trim() || !difficulty || !duration || !season.trim() || countries.length < 1) {
                console.log("campos vacíos");
                setError(true);
                return;
            } else {
                setError(false);
            }
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
    const PintarError = () => (
        <div className={styles.error}>Todos los campos obligatorios</div>
    );


    return (
        <>
            <h2>Formulario</h2>
            {error && <PintarError/>}
            <form onSubmit={handleSumit}>
                <label  htmlFor='nombre' >Nombre</label>
                    <input type='text' id="name" name="name" value={state.name} onChange={(e)=>{handleChange(e)}} required />
                <label  htmlFor='nombre' >Duracion</label>
                    <input name="duration" value={state.duration}  type='time'  min="01:00" max="12:00"  onChange={(e)=>{handleChange(e)}} required/>
                <label>Difucultad</label>
                    <label><input type="radio" id="1" value='1' name='difficulty' onChange={(e) => handleChoose(e)}  />1</label>
                    <label><input type="radio" id="2" value='2' name='difficulty' onChange={(e) => handleChoose(e)} />2</label>
                    <label><input type="radio" id="3" value='3' name='difficulty' onChange={(e) => handleChoose(e)} />3</label>
                    <label><input type="radio" id="4" value='4' name='difficulty' onChange={(e) => handleChoose(e)}/>4</label>
                    <label><input type="radio" id="5" value='5' name='difficulty' onChange={(e) => handleChoose(e)}/>5</label>
                <label>Temporada</label>
                     <label><input type="radio" id="Summer" value='Summer' name='season' onChange={(e) => handleChoose(e)}/>Summer</label>
                     <label><input type="radio" id="Autumn" value='Autumn' name='season' onChange={(e) => handleChoose(e)}/>Autumn</label>
                     <label><input type="radio" id="Winter" value='Winter' name='season' onChange={(e) => handleChoose(e)}/>Winter</label>
                     <label><input type="radio" id="Spring" value='Spring' name='season' onChange={(e) => handleChoose(e)}/>Spring</label>
                <label>Country</label>
                    <select name="countries" onChange={(e)=> handleSelect(e)} required>
                    {countries?.map(element=> {
                        return (
                            <option value={element.id} key={element.id}>{element.name}</option>
                        )
                    })}
                    </select>
                    {state.countries?.map(country => {
                        return (
                            <div key={Math.random()}>
                                <p >{countries.find(c => c.id === country).name}</p>
                                <button value={country} type="button" onClick={(e)=>handleRemove(e)} >x</button>
                            </div>
                        )
                    })}
                <button type="submit">Crear nueva actividad</button>
            </form>
        </>
    )
}

export default CreateActivity;