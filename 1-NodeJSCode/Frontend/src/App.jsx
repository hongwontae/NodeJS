import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import BasicLayout from "./components/BasicLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Reset from "./components/Reset";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicLayout></BasicLayout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        {path : '/signup', element : <SignUp></SignUp>},
        {path : '/reset', element : <Reset></Reset>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
