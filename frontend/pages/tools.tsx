import PageTemplate from "../components/PageTemplate";
import ToolCard from "../components/ToolCard";

const Tools = () => {
    return(
      <PageTemplate>
        <h1>Tools for developers</h1>
        <hr />
        <div className="tools-list">
          <div className="tools-row">
            <div className="tools-item">
              <img src="https://img.artlebedev.ru/everything/jayjoy/jayjoy.png" alt="" width="80%"/>
              <p>asdafsdfasdf</p>
            </div>
            <div className="tools-item">
              <p>asdafsdfasdf</p>
            </div>
            <div className="tools-item">
              <p>asdafsdfasdf</p>
            </div>
            <div className="tools-item">
              <p>asdafsdfasdf</p>
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
        `}
        </style>
        </div>
      </PageTemplate>
    );
}

export default Tools