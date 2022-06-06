import React, { useEffect , useState} from "react";
import NavBar from '../NavBar/Navbar';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { allCountries, clear , sort, sorNumerico, sortContinent, sortActivity} from "../../Redux/actions";
import style from './Home.module.css'
import Paginacion from "../Paginacion/Paginacion";

function Home() {
    const { countries, allActivity } = useSelector(state=> state)

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(allCountries())
        dispatch(clear())
    },[dispatch])
    
    // filtro por continente
    // const [state, setState] = useStateallActivity
    let filtroActivity = allActivity.filter(c => {if(c.activities[0] !== undefined){ return c.activities}})
    let arrayActivity = filtroActivity.map(c => c.activities[0]['name'])
    let arrayActivity1 = arrayActivity.filter((item,index)=>{
        return arrayActivity.indexOf(item) === index;
      })

    //------ Paginacion---
    const [pag, setPag] = useState(1);
    const [countriesPag ] = useState(10);
    let [input,setInput] = useState(1);
    const max = Math.ceil(countries?.length? countries.length/countriesPag : countries.length /countriesPag);
  
    function handleSelectAlfabetico(e){
        e.preventDefault();
        dispatch(sort(e.target.value))
        setInput(input=1)
        setPag(1)
    } 

    function handleSelectPopulation(e){
        e.preventDefault();
        dispatch(sorNumerico(e.target.value))
        setInput(input=1)
        setPag(1)
    }

    function handleSelectContinent(e){
        dispatch(sortContinent(e.target.value))
        setInput(input=1)
        setPag(1)
    }
    function handleSelectActivity(e) {
        dispatch(sortActivity(e.target.value))
        setInput(input=1)
        setPag(1)
    }

    return (
        <div className={style.imagen}>
            <NavBar/>
            <nav className={style.opciones}>
                <select className={style.orden} onChange={(e)=> handleSelectAlfabetico(e)} >
                    <option>ORDEN</option>
                    <option value='asc' >Asc</option>
                    <option value='des' >Des</option>
                </select>
                <select className={style.poblacion} onChange={(e)=> handleSelectPopulation(e)}>
                    <option>POBLACION</option>
                    <option value='asc' >Asc</option>
                    <option value='des' >Des</option>
                </select>
                <select className={style.poblacion} onChange={(e)=>handleSelectContinent(e)}>
                    <option >CONTINENTE</option>
                    <option value='todos' >Todos los continentes</option>
                    <option value='Africa' >Africa</option>
                    <option value='South America' >South America</option>
                    <option value='Antarctica' >Antarctica</option>
                    <option value='Asia' >Asia</option>
                    <option value='Europe' >Europe</option>
                    <option value='North America' >North America</option>
                    <option value='Oceania' >Oceania</option>
                </select>
                <select className={style.actividad} onChange={(e)=>handleSelectActivity(e)}> 
                    <option >ACTIVIDAD</option>
                    {arrayActivity1?.map(item => {
                        return(
                            <option value={item} key={Math.random()}>{item}</option> 
                            )
                        })
                    }
                </select>
            </nav>
                    
            
            <div className={style.cardContent}>
                <Paginacion pag={pag} setPag={setPag} max={max} input={input} setInput={setInput}  />
            {!countries.length ?
            <p>loading...</p>
            :
            countries === "No se encontro el pais"
                ? <p>No se encontro el pais, por favor vuelva a intentar</p>
                : countries.slice(
                    (pag-1)* countriesPag, 
                    (pag-1)* countriesPag + countriesPag
                ).map(country=>{
                    return( <Card flags={country.flags} name={country.name} continents={country.continents} key={country.id} id={country.id} activities={country.activities} />)
                })
            }
        
        </div>
            
        </div>
    )
}

export default Home;