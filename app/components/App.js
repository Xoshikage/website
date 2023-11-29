// import logo from './logo.svg';
import 'app/globals.css';
import Navbar from 'app/components/navbar.js';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar></Navbar>

          <a><code>Software Engineering Readiness Club</code></a>
          
          
      
    <main>
      <div>
                
        <body>

          <a className="titles"><code>current projects for our club</code></a>

        <div className="grid-container-element">
          <h1 className="grid-child-element">SERC website</h1>
          <h1 className="grid-child-element">rust reticulum</h1>
        </div>

        <div className="grid-container-element">

        </div>

        <div className="grid-container-element">
          <div className="grid-child-element">the most vital element of an organization is recognizability. we are currently in development of a visually pleasing, informative website that caters to anyone who may want to know more about what we do. </div>

          <div className="grid-child-element">Reticulum is designed to give communities and users a way of setting up peer-to-peer messaging networks that are secure, private, and extremely resilient. It runs over any kind of hardware --packet radio, LAN, wired connections, or even at the applications layer of TCP/IP</div>
        </div>
      

        </body>

      </div>
    </main>

       
      </header>
    </div>
  );
}
