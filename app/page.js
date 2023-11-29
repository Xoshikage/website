import Image from 'next/image'
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
// import bgImage from '/gradient.png';

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center overflow-clip">
        <div className=''>
            
            <Footer />
        </div>

      </main>
  )
}
