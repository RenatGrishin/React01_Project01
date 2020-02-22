import React from "react";
import css from './Heaser.module.css';

const Header =()=>{
    return(
        <header className={css.header}>
            <div>Logo-site</div>
            <div>Settings</div>
        </header>
    );
}

export default Header;