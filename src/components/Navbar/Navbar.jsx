import React from "react";
import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar =(props)=>{
    return(
        <div className={css.navbar}>
            <div>
                <div>
                    <NavLink to='main'>Home</NavLink>
                </div>
                <div>
                    <NavLink to='Profile'>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='posts'>Posts</NavLink>
                </div>
                <div>
                    <NavLink to='Users'>Users</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Navbar;