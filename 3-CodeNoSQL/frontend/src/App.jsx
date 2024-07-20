import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProductRegister from "./Pages/ProductRegister";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import {productLoader} from './loader/prod-loader'
import ProductEdit from "./Pages/ProductEdit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/signup", element : <Signup></Signup>},
        {path : '/proregister', element : <ProductRegister></ProductRegister>},
        {path : '/showall', element : <Products></Products>},
        {path : '/prod/:prodId', element : <Product></Product>, loader : productLoader},
        {path : '/prod/edit', element : <ProductEdit></ProductEdit>}
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
