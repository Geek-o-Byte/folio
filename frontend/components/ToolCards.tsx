import React, { Component } from "react";
import ToolCard from "./ToolCard";
import styles from "../styles/ToolCards.module.scss"

class ToolCards extends Component{
    render(){
        return(
            <div className={styles.toolcards}>
                <ToolCard/>
                <ToolCard/>
                <ToolCard/>
            </div>
        );
    };
};

export default ToolCards;