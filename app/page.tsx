'use client'
import Image from "next/image";
import Link from "next/link";
import ImageModal from "../components/imagemodal";

export default function Home() {
  return (
    <main className=" font-figtree width-80 float-right justify-right align-right py-32 px-16">
      
      <div className=" pl-5 items-center">
        <h1 className="text-8xl font-dongle mb-2">hi, I'm dawniqueca steele!</h1>
        <h3 className="text-xl">An interdiscplinary designer, focusing on storytelling and interaction.</h3>
      </div>
       

        <div className="m-auto p-5">
          <h3 className="text-xl">Featured Projects</h3>
          <div>

          </div>
          
        </div>

        <div className="m-auto p-5">
          <h3 className="text-xl">More Works</h3>
          <div>

          </div>
        </div>
  
        
      </main>
    
    
  );
}
