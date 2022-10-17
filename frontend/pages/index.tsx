import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import PageTemplate from '../components/PageTemplate'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Max Miriko — personal page</title>
        <meta name="description" content="Max Miriko — personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar></Navbar>
        <PageTemplate>
            <div className='visit_card'>
              <span>visit card</span>
              <hr />
              {/* <img src="/visitcard.jpeg" alt="" /> */}
              <div className="imit">
        
              </div>
              <h1>Max Miriko</h1>
              <p>Developer&emsp;&#x2715;&emsp;Analyst&emsp;&#x2715;&emsp;Good person</p>
              <ul>
                <li><a href="https://t.me/your_max_enj0y" className='tg'>telegram</a></li>
                <li><a href="" className='li'>linkedin</a></li>
                <li><a href="" className='fb'>facebook</a></li>
              </ul>
              <style jsx>{
              `
              .visit_card{
                  background-color: #000000;
                  border-radius: 2rem;
                  border: 1px #FFFFFF solid;
                  padding: 1rem;
              }
              .visit_card img{
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 30vh;
                height: 30vh;
              }
              .imit{
                width: 30vh;
                height: 30vh;
                background: #11e8bb; /* Old browsers */
                background: -moz-linear-gradient(top,  #11e8bb 0%, #8200c9 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top,  #11e8bb 0%,#8200c9 100%); /* Chrome10-25,Safari5.1-6 */
                margin-left: auto;
                margin-right: auto;
                border-radius: 50%;
                background: linear-gradient(to bottom,  #11e8bb 0%,#8200c9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#11e8bb', endColorstr='#8200c9',GradientType=0 );
              }
              .visit_card h1{
                text-align: center;
              }
              .visit_card p{
                text-align: center;
              }
              .visit_card ul{
                display: flex;
                padding: 0;
                margin-top: 2rem;
                align-items: center;
                justify-content: space-around;
              }
              .visit_card ul li{
                list-style-type: none;
              }
              .visit_card ul li a{
                text-decoration: none;
                font-weight: bold;
                color: white;
              }
              .tg{
                font-style: italic;
                color: #0088cc !important;
              }
              .li{
                font-style: italic;
                color: #0e76a8 !important; 
              }
              .fb{
                font-style: italic;
                color: #4267B2 !important;
              }
              .tg:hover{
                text-decoration: underline !important;
              }
              .li:hover{
                text-decoration: underline !important;
              }
              .fb:hover{
                text-decoration: underline !important;
              }
              @media screen and (max-width: 320px){
                .visit_card ul{
                  display: block;
                }
                .visit_card ul li{
                  margin-left: auto;
                  margin-right: auto;
                }
              }
              `
              }</style>
            </div>
            <h1>Projects</h1>
            <hr />
            <a href="" className='project_link'>
            <div className="project">
              <div className="col project_text">
                <h2>Project name</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur repellat distinctio reiciendis aspernatur ad, eum, provident voluptatibus soluta dolorem at totam quam rem fugiat fuga, deserunt reprehenderit laudantium a cupiditate obcaecati. In fuga possimus beatae quod debitis quae dicta nostrum! Consequuntur repellendus inventore doloremque velit quia? Necessitatibus, accusantium. Earum, officiis.</p>
              </div>
              <div className="col">
                <img src="/visitcard.jpeg" alt="" className='project_img'/>
              </div>
            </div>
            <style jsx>{`
              .project{
                transition: all .2s ease-in-out;
                display: flex;
                grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
                flex-direction: row;
                padding: 1rem;
                margin-top: 2rem;
                border: 1px solid white;
                border-radius: 1rem;
              }
              .project:hover{
                transform: scale(1.05);
              }
              .col{
                margin-left: auto;
              }
              .col h2{
                margin-top: 0;
              }
              .project_img{
                height: 20vw;
              }
              .project_text{
                margin-right: 1rem;
              }
              .project_link{
                text-decoration: none;
                color: inherit;
              }
              @media (max-width: 860px){
                .project{
                  padding-left: auto;
                  padding-rigth: auto;
                }
              }
              @media (max-width: 480px){
                .project{
                  flex-direction: column-reverse;
                  align-items: center;
                }
              }
              `}
              </style>
            </a>
        </PageTemplate>

      </main>
    </div>
  )
}

export default Home
