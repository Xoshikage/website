import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Projects(){
    return(
        <main>
            <Navbar></Navbar>
            <div class="w-full">      
            <Hero className={"min-h-screen h-full"}></Hero>         
                
            <div className={"bg-black w-full flex justify-center py-32"}>

                <div className={"w-11/12 max-w-[1500px] grid grid-rows-3 gap-3.5"}>
                    <div className={"row-start-1"}>
                        <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                            <div className="avatar">
                                <div className="w-72 rounded">
                                    <img src="" alt=""/>
                                </div>
                            </div>

                            <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                <h1>
                                    <code>Club Website</code>
                                </h1>


                                <p>
                                <code>the most vital element of an organization is recognizability. we are currently in development of a visually pleasing, informative website that caters to anyone who may want to know more about what we do.</code>
                                </p>
                                    {/*<a href={"/projects"}/>*/}
                            </div>

                                <a href={"/projects"}>Website</a>

                        </div>
                    </div>
                </div>


                <div className={"w-11/12 max-w-[1500px] grid grid-rows-3 gap-3.5"}>
                    <div className={"row-start-1"}>
                        <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                            <div className="avatar">
                                <div className="w-72 rounded">
                                    <img src="" alt=""/>
                                </div>
                            </div>

                            <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                <h1>
                                    <code>Rust Reticulum</code>
                                </h1>


                                <p>
                                    <code>Reticulum is designed to give communities and users a way of setting up peer-to-peer messaging networks that are secure, private, and extremely resilient. It runs over any kind of hardware --packet radio, LAN, wired connections, or even at the applications layer of TCP/IP</code>
                                </p>
                                    {/*<a href={"/projects"}/>*/}
                            </div>

                                <a href={"/projects"}>link</a>

                        </div>
                    </div>
                </div>
   




            </div>
            </div>
        </main>
    )
}