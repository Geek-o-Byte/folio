import Head from "next/head";
import {useRouter} from "next/router";
import PageTemplate from "../components/PageTemplate";
import ToolCard from "../components/ToolCard";

const Tools = () => {
    const router = useRouter();
    let routerPath: string = router.asPath;
    routerPath = routerPath.slice(1)
    routerPath = routerPath.charAt(0).toUpperCase() + routerPath.slice(1)
    return(
      <PageTemplate>
        <Head>
          <title>{routerPath} / Max Miriko </title>
        </Head>
        <h1>Randon staff</h1>
        <hr />
        <div className="tools-list">
          <div className="tools-row">
            <div className="tools-item">
              <div className="card"></div>
              <p>Make a card sticker</p>
            </div>
            <div className="tools-item">
              <p>Pattern generator</p>
            </div>
            <div className="tools-item">
              <p>Logo generator</p>
            </div>
            <div className="tools-item">
              <p>Metro station database</p>
            </div>
          </div>
          <h1>Fonts and fonts</h1>
          <hr />
          <div className="tools-list">
            <div className="tools-row">
              <div className="tools-item">
                <p>Font weight interpolator</p>
              </div>
              <div className="tools-item">
                <p>Font alphabet adder</p>
              </div>
            </div>
          </div>
        <style jsx>{`
        .tools-list{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
        .tools-row{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .tools-item{
          column-gap: 2rem;
          padding: 2rem;
          flex-direction: column;
          flex-wrap: wrap;
          flex: 1;
          height: 25vh;
          border: 1px solid #fff;
          border-radius: 2rem;
        }
        .card{
          width: 85.6px;
          height: 53.98px;
          background-color: #343434;
          border-radius: 3.18px;
        }
        `}
        </style>
        </div>
      </PageTemplate>
    );
}

export default Tools