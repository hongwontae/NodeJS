import { useEffect, useState } from "react";
import {showDataOne} from '../http/FormHttp'

function FindByPk(){

    const [find, setFind] = useState({}); 

    useEffect(()=>{
        async function getOneHttp(){
            const data = await showDataOne(2);
            setFind(data);
        }
        getOneHttp();
    }, [])

    return(
        <>
            <div>
                <ul>
                    <li>{find.title}</li>
                    <li>{find.description}</li>
                    <li>{find.price}</li>
                </ul>
            </div>
        </>
    )
}

export default FindByPk;