import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

function Navigation(){

    return(
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/signup'}>Signup</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'}>LogIN</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation;