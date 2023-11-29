import Image from 'next/image'
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
// import bgImage from '/gradient.png';

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center overflow-clip">

          <Navbar></Navbar>

          <div className="w-full"> 

              <Hero className={"min-h-screen h-full"}></Hero>
              <div className={"w-full flex justify-center py-32 bg-slate-50"}>

                  <div className={"w-11/12 max-w-[1500px] grid grid-rows-3 gap-3.5"}>
                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Jeffrey Vandever
                                  </h1>

                                  <p>
                                      He is the most handsome man in the entire world amirite?
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>

                          </div>
                      </div>

                      <div className={"row-start-2"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Person
                                  </h1>

                                  <p>
                                      This is a person who is in da club
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-3"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                <h1>
                                    Person
                                </h1>

                                <p>
                                    This is a person who is in da club
                                </p>
                                
                                <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
          <div className={"w-full h-96 flex p-16 px-24 items-center bg-stone-400"}>
              <div className="w-60 rounded">
                  <img src="Logo.png" />
              </div>
              <div className={"ml-12 h-full py-8 prose lg:prose-md"}>
                  <h1>
                      SER Club
                  </h1>

                  <p>
                      This is a cool club
                  </p>
              </div>
          </div>


      </main>
  )
}
