import React, { useEffect, useState } from "react";
import NavBar from '../NavBar/Navbar';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { allCountries, clear , sort, sorNumerico, sortContinent, sortActivity, actividades} from "../../Redux/actions";
import style from './Home.module.css'

function Home() {
    const { countries, allActivity } = useSelector(state=> state)

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(clear())
        dispatch(allCountries())
        
    },[dispatch])
    
    // filtro por continente
    let filtroActivity = allActivity.filter(c => {if(c.activities[0] !== undefined){ return c.activities}})
    let arrayActivity = filtroActivity.map(c => c.activities[0]['name'])
    let arrayActivity1 = arrayActivity.filter((item,index)=>{
        return arrayActivity.indexOf(item) === index;
      })
    
  
    function handleSelectAlfabetico(e){
        e.preventDefault();
        dispatch(sort(e.target.value))
    } 

    function handleSelectPopulation(e){
        e.preventDefault();
        dispatch(sorNumerico(e.target.value))
    }

    function handleSelectContinent(e){
        dispatch(sortContinent(e.target.value))
    }
    function handleSelectActivity(e) {
        dispatch(sortActivity(e.target.value))
    }

    return (
        <div>
            <NavBar/>
            <div>
                <select onChange={(e)=> handleSelectAlfabetico(e)} >
                    <option>Orden</option>
                    <option value='asc' >Asc</option>
                    <option value='des' >Des</option>
                </select>
                <select onChange={(e)=> handleSelectPopulation(e)}>
                    <option>Poblacion</option>
                    <option value='asc' >Asc</option>
                    <option value='des' >Des</option>
                </select>
                <select  onChange={(e)=>handleSelectContinent(e)}>
                    <option >Continente</option>
                    <option value='todos' >Todos los continentes</option>
                    <option value='Africa' >Africa</option>
                    <option value='South America' >South America</option>
                    <option value='Antarctica' >Antarctica</option>
                    <option value='Asia' >Asia</option>
                    <option value='Europe' >Europe</option>
                    <option value='North America' >North America</option>
                    <option value='Oceania' >Oceania</option>
                </select>
                <select onChange={(e)=>handleSelectActivity(e)}> 
                    <option >Filtro por Actividad</option>
                    {arrayActivity1?.map(item => {
                        return(
                            <option value={item}>{item}</option> 
                        )
                    })
                    }
                </select>
            </div>
            <div className={style.card}>
                {countries === "No se encontro el pais"
                    ? <p>No se encontro el pais, por favor vuelva a intentar</p>
                    : countries?.map(country=>{
                        return( <Card flags={country.flags} name={country.name} continents={country.continents} key={country.id} id={country.id} activities={country.activities} />)
                    })
                }
            </div>
        </div>
    )
}

export default Home;