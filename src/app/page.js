import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import BioCard from "@/components/bio-card";
import Image from "next/image";
export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center overflow-clip">
        <Navbar />
          <div className="w-full">

              <Hero className={"min-h-screen h-full"}></Hero>
              <div className={"bg-base-100 w-full flex justify-center py-32"}>
                
                  <div className={"w-11/12 max-w-[1500px] grid grid-rows-3 gap-3.5"}>
                  {/* Keep in Mind: BioCard works best w/ square profile pictures! */}
                  <BioCard 
                        className="row-start-1"
                        link="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                        desc="A photo of Michael Stickley" 
                        name="Michael Stickley"
                        role="Club President"
                        discord_uname="@theinvisiblewaffle"
                        github="https://github.com/mstickley22">
                        <p>What an outstanding individual!</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, veritatis corporis perspiciatis amet libero tempore aut, delectus doloremque sapiente eveniet totam corrupti maxime accusantium ex autem ipsa sequi asperiores tenetur.</p>
                    </BioCard>
                    <BioCard 
                        className="row-start-2"
                        link="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                        desc="A photo of Michael Stickley" 
                        name="Michael Stickley"
                        role="Club President"
                        discord_uname="@theinvisiblewaffle"
                        github="https://github.com/mstickley22">
                        <p>What an outstanding individual!</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, veritatis corporis perspiciatis amet libero tempore aut, delectus doloremque sapiente eveniet totam corrupti maxime accusantium ex autem ipsa sequi asperiores tenetur.</p>
                    </BioCard>
                    <BioCard 
                        className="row-start-3"
                        link="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                        desc="A photo of Michael Stickley" 
                        name="Michael Stickley"
                        role="Club President"
                        discord_uname="@theinvisiblewaffle"
                        github="https://github.com/mstickley22">
                        <p>What an outstanding individual!</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, veritatis corporis perspiciatis amet libero tempore aut, delectus doloremque sapiente eveniet totam corrupti maxime accusantium ex autem ipsa sequi asperiores tenetur.</p>
                    </BioCard>
                  </div>

              </div>
          </div>

          <div className={"w-full h-96 bg-base-100 flex p-16 px-24 items-center"}>
              <div className="w-60 rounded">
                  <picture><img src="Logo.png" alt=""/></picture>
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