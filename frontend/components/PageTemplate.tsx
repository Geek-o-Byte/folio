import React from "react";
import Navbar from "./Navbar";

const PageTemplate = (props: any) => {
    return(
        <div className="page-template">
            <Navbar/>
            {props.children}
            <style jsx>
                {`
                .page-template{
                    margin: 0 10vw;
                }
                `}
            </style>
        </div>
    )
}

export default PageTemplate