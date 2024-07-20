import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="bg-slate-700 h-screen text-green-700 flex flex-col">
        <div className="flex justify-center gap-4 mt-4">
          <Link to={"/"} className="border-[1px] p-1 rounded-md">
            Home
          </Link>
          <Link to={"/signup"} className="border-[1px] p-1 rounded-md">
            Signup
          </Link>
          <Link to={"/login"} className="border-[1px] p-1 rounded-md">
            Login
          </Link>
          <Link to={"/proregister"} className="border-[1px] p-1 rounded-md">
            Product-Register
          </Link>
          <Link to={"/showall"} className="border-[1px] p-1 rounded-md">
            Products
          </Link>
        </div>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Layout;
