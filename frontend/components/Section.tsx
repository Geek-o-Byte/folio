import React from "react";
import styles from "../styles/Section.module.scss"

const Section = (props: any) =>{
    return(
        <section className={styles.section}>
            {(props.name == "achievments") && <div className={styles.achievments}></div>}
            <h1>{props.name}</h1>
            <div>{props.children}</div>
        </section>
    );
};

export default Section;