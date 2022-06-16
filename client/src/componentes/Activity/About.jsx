import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
// import { allCountries } from "../../Redux/actions";

export default function Activity() {

    const { allActivity } = useSelector(state=> state)

    return(
        <>
            <select> 
                        <option >ACTIVIDAD</option>
                        {allActivity?.map(item => {
                            return(
                                <option value={item} key={Math.random()}>{item}</option> 
                                )
                            })
                        }
            </select>
        </>
    )
}