import { useState } from "react";
import {sendPostHttp} from '../http/FormHttp'

function SecondForm() {

    const [data, setData] = useState('')

    function dataChange(e){
      setData(e.target.value)
    }
    function clickHandler(){
      sendPostHttp(data);
    }

  return (
    <>
      <label htmlFor="name"></label>
      <input id="name" value={data} onChange={dataChange}></input>
      <button onClick={clickHandler}>Send Server</button>
    </>
  );
}

export default SecondForm;
