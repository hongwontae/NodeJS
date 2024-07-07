import { useEffect, useState } from "react";
import { getHttp } from "../http/FormHttp";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function gggg() {
      const data = await getHttp();
      setData(data);
    }
    gggg();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-10 gpa-4">
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <img
                className="w-[20rem] h-[20rem]"
                src={`http://localhost:3000/uploads/${ele.fileName}`}
                alt={ele.email}
              ></img>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gpa-4">
        {/* <button
          onClick={async () => {
            await getgetHttp();
          }}
        >
          Click
        </button> */}
        <button onClick={()=>{
            const newBrowser = window.open('http://localhost:3000/auth/order-Accounting', '_blank', 'i');
            console.log(newBrowser)
            if(newBrowser){
                newBrowser.onload = ()=>{
                    console.log(1+1)
                }
            }

        }}>Click and ORDER PDF</button>
      </div>
    </>
  );
}

export default Main;
