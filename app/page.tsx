import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
  <main className="relative flex justify-center items-center  flex-col overflow-clip mx-auto sm:px-10 px-5 bg-black-100">
    <div className='fixed flex flex-col justify-center items-center z-[1000] top-2 right-2'>
        <Link target="_blank" href="https://www.linkedin.com/in/amandeep-rawat-1622a82ba/">
            <button  className="relative inline-flex h-14  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <img  className="rounded-full w-full h-full " src="./reduced.png.jpg"   alt="" />
      </span>
    </button>
        </Link>
    <h3 className="font-bold">R<span className="text-[#be2ed6] ">W</span>T</h3>
            </div>
    



    <div className="max-w-7xl  w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProject/>
      <Clients/>
      <Experience/>
      <Approach/>
      <Footer/>
      </div> 
  </main>
  );
}
