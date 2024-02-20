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
                                    <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt=""/>
                                </div>
                            </div>

                            <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                <h1>
                                    Person
                                </h1>


                                <p>
                                    This is a person who is in da club
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