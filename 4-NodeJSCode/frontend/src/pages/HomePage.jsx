import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="h-screen bg-slate-600 flex flex-col justify-center items-center gap-10">
        <h1 className="text-white text-5xl">HomePage</h1>

        <div className="flex gap-4">
          <Link to={'/signup'} className="border-[1px] p-1">SignUp</Link>
          <Link to={'/login'} className="border-[1px] p-1">Log-In</Link>
          <Link to={'/post'} className="border-[1px] p-1">Post</Link>
          <Link to={'/show'} className="border-[1px] p-1">Show</Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
