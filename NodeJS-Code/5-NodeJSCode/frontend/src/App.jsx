import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreatePost from "./pages/CreatePost";
import ShowPage from "./pages/ShowPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage></HomePage> },
    { path: "/signup", element: <SignupPage></SignupPage> },
    {path : '/login', element : <LoginPage></LoginPage>},
    {path : '/post', element : <CreatePost></CreatePost>},
    {path : '/show', element : <ShowPage></ShowPage>}
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
