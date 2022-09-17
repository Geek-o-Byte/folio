import React from "react";
import styles from "../styles/Navbar.module.scss"

const Navbar = (props: any) =>{
    return(
        <nav className={styles.navbar}>
            <li>
                <ul><a href="/">Home</a></ul>
                <ul><a href="/notes">Notes</a></ul>
                <ul><a href="/tools">Tools</a></ul>
            </li>
        </nav>
    );
};

export default Navbar;