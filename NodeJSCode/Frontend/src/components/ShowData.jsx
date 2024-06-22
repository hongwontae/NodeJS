/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { showDataHttp, updateHttp, deleteHttp } from "../http/FormHttp";

function ShowData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await showDataHttp();
      setData(response);
    }
    getData();
  }, []);

  async function deleteHandler(id){
    await deleteHttp(id);
    setData(prevState => {
        return prevState.filter(ele => {
            return ele.id !== id
        })
    })
  }

  async function updateHandler(id){
    const {data} = await updateHttp(id);
    setData((prevState)=>{
       const copyData = [...prevState];
       const updatedData = copyData.map((ele)=>{
        if(id === ele.id){
          return {...data}
        } else {
          return {...ele}
        }
       })
        return updatedData
    })
  }


  return (
    <>
      {data &&
        data.map((ele) => {
          return (
            <div key={ele.id}>
              {ele.title}
              <button
                onClick={() => {
                  return updateHandler(ele.id);
                }}
              >
                {ele.price}
              </button>
              <button
                onClick={() => {
                    return deleteHandler(ele.id)
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default ShowData;
