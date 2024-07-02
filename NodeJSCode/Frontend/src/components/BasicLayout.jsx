import { Outlet } from "react-router-dom";

function BasicLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-screen text-center">
        <div className="flex-grow mt-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default BasicLayout;
