import React from "react";
import {useRouter} from "next/router";
import Navbar from "./Navbar";
import Head from "next/head";

const PageTemplate = (props: any) => {
    const router = useRouter();
    let routerPath: string = router.asPath;
    routerPath = routerPath.slice(1);
    routerPath = routerPath.charAt(0).toUpperCase() + routerPath.slice(1);
    let title: string = `${routerPath} / Max Miriko`;
    return(
        <div className="page-template">
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Head>
            <Navbar/>
            {props.children}
            <style jsx>
                {`
                .page-template{
                    padding-top: 4rem;
                    margin: 0 10vw;
                }
                `}
            </style>
        </div>
    )
}

export default PageTemplate