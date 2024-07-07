import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './pages/Main';

function App() {

  const router = createBrowserRouter([
    {path : '/', element : <Main></Main>}
  ])
   
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
