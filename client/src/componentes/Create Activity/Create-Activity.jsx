import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allCountries, createActivity} from '../../Redux/actions'
import styles from './Create.module.css'
// import Navbar from '../NavBar/Navbar'
import { Link } from "react-router-dom";
function CreateActivity() {
    const [error, setError] = useState('');
    const [mostrarError, setMostrarError] = useState(false)
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
        if(state.countries.includes(e.target.value)){
            console.log('No se pueden repetir el mismo pais  🥳 ')
        } else {

            setState({
                ...state,
                countries: [...state.countries, e.target.value],
                
            })
        }
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
            const { name, difficulty, season, countries} = state;
            if( !name.trim() || !/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(name) || name.length <= 3){
                setError('El nombre no debe contener caracteres especiales y debe ser mayor a dos')
                setMostrarError(true)
                return 
            } 
            if( !difficulty ){
                setError('Debes de seleccionar un nivel de Dificultad')
                setMostrarError(true)
                return
            }
            if( !season.trim()){
                setError('Debes de seleccionar alguna estacion del año')
                setMostrarError(true)
                return
            }
            if(countries.length < 1 ){
                setError('Debes de seleccionar al menos un Pais')
                setMostrarError(true)
                return
            }
            dispatch(createActivity(state))
            setState({
                name: '',
                difficulty: 0,
                duration: '',
                season: '',
                countries: [],
            })
            alert('Su actividad se creo exitosamente')
            navegate('/countries')
   
    }
    const PintarError = () => (
        <div className={styles.error}>Todos los campos obligatorios</div>
    );

    return (
        <>
            {/* <Navbar/> */}
            <header className={styles.header}>
            <Link to='/countries'>
            <button className={styles.volver}>Volver</button>
            </Link> 
            <div>Formulario</div></header>

            <section className={styles.contenedorFormulario} >
            <div className={styles.formulario}>
            <form onSubmit={handleSumit}>
            {mostrarError && <p className={styles.error}>{error}</p>}
                <><label className={styles.label} htmlFor='nombre' >Nombre</label>
                    <input className={styles.name} placeholder='Nombre de tu Actividad' type='text' id="name" name="name" value={state.name} onChange={(e)=>{handleChange(e)}} required /></>
                
                <><label className={styles.label} htmlFor='nombre' >Duracion</label>
                    <input className={styles.duration} name="duration" value={state.duration}  type='time'  min="01:00" max="12:00"  onChange={(e)=>{handleChange(e)}} required/></>
                    <label className={styles.label}>Dificultad</label>
                <div className={styles.contenedor} >
                    <label className={styles.label}>1</label>
                    <input className={styles.input} type="radio" id="1" value='1' name='difficulty' onChange={(e) => handleChoose(e)} />
                    <label className={styles.label}>2</label>
                    <input className={styles.input} type="radio" id="2" value='2' name='difficulty' onChange={(e) => handleChoose(e)} />
                    <label className={styles.label}>3</label>
                    <input className={styles.input} type="radio" id="3" value='3' name='difficulty' onChange={(e) => handleChoose(e)} />
                    <label className={styles.label}>4</label>
                    <input className={styles.input} type="radio" id="4" value='4' name='difficulty' onChange={(e) => handleChoose(e)}/>
                    <label className={styles.label}>5</label>
                    <input className={styles.input} type="radio" id="5" value='5' name='difficulty' onChange={(e) => handleChoose(e)}/>
                    </div>
                    <label className={styles.label}>Temporada</label>
                    <div className={styles.contenedor} >
                
                     <label className={styles.label}>Verano 🥵</label>
                     <input className={styles.input}  type="radio" id="Summer" value='Summer' name='season' onChange={(e) => handleChoose(e)}/>
                     <label className={styles.label}>Otoño 🍁</label><input className={styles.input}  type="radio" id="Autumn" value='Autumn' name='season' onChange={(e) => handleChoose(e)}/>
                     <label className={styles.label}>Invierno 🥶</label><input className={styles.input}  type="radio" id="Winter" value='Winter' name='season' onChange={(e) => handleChoose(e)}/>
                     <label className={styles.label}>Primavera 🌸</label><input className={styles.input}  type="radio" id="Spring" value='Spring' name='season' onChange={(e) => handleChoose(e)}/>
                     </div>
                <label className={styles.label}>Pais</label>
                    <select className={styles.country} placeholder='Selecciona el o los paises' name="countries" onChange={(e)=> handleSelect(e)} required>
                        <option className={styles.label}>Elegi los paises</option>
                    {countries?.map(element=> {
                        return (
                            <option  value={element.id} key={element.id}>{element.name}</option>
                        )
                    })}
                    </select>
                    <button className={styles.button} type="submit">CREAR</button>
                    <div className={styles.contenedorC}>
                    
                    {state.countries?.map(country => {
                        return (
                            <div key={Math.random()}>
                                <div className={styles.contenedorCountry}>
                                    <button className={styles.buttonClose} value={country} type="button" onClick={(e)=>handleRemove(e)} >X</button>
                                    <p className={styles.parrafo}>{countries.find(c => c.id === country).name}</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
            </form>
            </div>
            </section>
            
        </>
    )
}

export default CreateActivity;