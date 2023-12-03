import Navbar from "@/components/navbar";

const projects = () =>{
    return (       
    <main className="flex min-h-screen w-full flex-col items-center overflow-clip">
        <Navbar></Navbar>
        <div>

          <h1>Current Projects</h1>

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

      </div>
      
      
    </main>
    )
}

export default projects;