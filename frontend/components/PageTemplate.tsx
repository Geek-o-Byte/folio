import React from "react";
import Navbar from "./Navbar";

const PageTemplate = (props: any) => {
    return(
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default PageTemplate