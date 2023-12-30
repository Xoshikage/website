import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import BioCard from "@/components/bio-card";
import Image from "next/image";

export default function Home() {

    return (
      <main className="flex min-h-screen w-fill flex-col items-center overflow-clip">
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
        
          <footer className="footer p-10 bg-neutral text-neutral-content">
  <aside className="space-y-1">
    <picture className="w-20"><img src="Logo.png" alt=""/></picture>
    <p>LU Software Eng. Readiness Club<br/>This is a cool club.</p>
  </aside> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
        <a href={"https://discord.gg/SMcAMwxPs5"}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
        </a>
        <a href={"https://github.com/LibertyUniversitySER/website"} className="h-5 w-5">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
    </div>
  </nav>
</footer>
          {/* <div className={"w-full h-96 bg-base-100 flex p-16 px-24 items-center"}>
              <div className="w-20 rounded">
                  
              </div>
              <div className={"ml-12 h-full py-8 prose lg:prose-md"}>
                  <h1>
                      SER Club
                  </h1>

                  <p>
                      This is a cool club
                  </p>
                  
                    
              </div>
          </div> */}


      </main>
  )
}