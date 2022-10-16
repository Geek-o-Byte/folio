import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss"

const Navbar = (props: any) =>{
    return(
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/notes">Notes</Link></li>
                <li><Link href="/tools">Tools</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;