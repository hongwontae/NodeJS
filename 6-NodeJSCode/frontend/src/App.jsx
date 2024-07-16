import { useEffect } from "react"
import { graphqlGet } from "./http/graphql";

function App() {

  useEffect(()=>{
    async function gr(){
      const data = await graphqlGet();
      console.log(data);
    }

    gr();
  }, [])

  return (
    <>
    <h1>App JS</h1>
    </>
  )
}

export default App
