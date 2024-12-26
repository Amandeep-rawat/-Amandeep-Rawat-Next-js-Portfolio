import { FloatingNav } from "@/components/ui/FloatingNav"; 
import { navItems } from "@/data";  
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically imported components
const Hero = dynamic(() => import('@/components/Hero'),{ loading: () => <p>Loading...</p> });
const Grid = dynamic(() => import('@/components/Grid'),{ loading: () => <p>Loading...</p> });
const RecentProject = dynamic(() => import('@/components/RecentProject'),{ loading: () => <p>Loading...</p> }); 
const Clients = dynamic(() => import('@/components/Clients'),{ loading: () => <p>Loading...</p> });
const Approach = dynamic(() => import('@/components/Approach'),{ loading: () => <p>Loading...</p> });
const Experience = dynamic(() => import('@/components/Experience'),{ loading: () => <p>Loading...</p> });
const Footer = dynamic(() => import('@/components/Footer'),{ loading: () => <p>Loading...</p> });

export default function Home() {
  return (
  <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 bg-black-100">
    <div className='fixed flex flex-col justify-center items-center z-[1000] top-2 right-2'>
        <Link target="_blank" href="https://www.linkedin.com/in/amandeep-rawat-1622a82ba/">
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <Image
          className="rounded-full w-full h-full"
          src="/reduced.webp"
          alt="Descriptive Alt Text Here" 
          width={40}
          height={40}
          priority={true} 
          quality={75} 
        />
     </span>
    </button>
        </Link>
    <h3 className="font-bold">R<span className="text-[#be2ed6] ">W</span>T</h3>
    </div>

    <div className="max-w-7xl w-full">
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
