import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Projects(){
    return(
        <main className="flex min-h-screen w-full flex-col items-center overflow-clip">

          <Navbar></Navbar>

          <div className="w-full"> 
              <Hero className={"min-h-screen h-full"}></Hero>
              <div className={"bg-gray-800 w-full flex justify-center py-32"}>

                  <div className={"w-11/12 max-w-[2500px] grid grid-rows-3 gap-3.5"}>
                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="../img/rust.png"/>
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-12 prose lg:prose-md"}>
                                  <h1 class="text-5xl">
                                    Club Website                            
                                  </h1>

                                  <p class="text-2xl text-gray-200 py-8 ">the most vital element of an organization is recognizability. we are currently in development of a visually pleasing, informative website that caters to anyone who may want to know more about what we do.</p>

                                  <div p-10>
                                    {/* <button class="btn btn-active text-sky-100 bg-red-500 hover:bg-red-700">button to do cool</button> */}
                                </div>
                              </div>

                          </div>
                      </div>

                      <div className={"row-start-2 py-4"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1 class="text-5xl">
                                    Rust Reticulum
                                  </h1>

                                  <p class="text-2xl py-8">
                                    Reticulum is designed to give communities and users a way of setting up peer-to-peer messaging networks that are secure, private, and extremely resilient. It runs over any kind of hardware --packet radio, LAN, wired connections, or even at the applications layer of TCP/IP
                                  </p>

                                 

                                  <div p-10>
                                    
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </main>
        
    )
}