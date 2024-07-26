import { Outlet } from "react-router-dom";
import classes from './Layout.module.css';
import Navigation from "../Navigation/Navigation";

function Layout() {
  return (
    <>
      <div className={classes.layout}>
        <Navigation></Navigation>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Layout;
