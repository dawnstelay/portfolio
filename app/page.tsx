'use client'
import Image from "next/image";
import Link from "next/link";
import ImageModal from "../components/imagemodal";

export default function Home() {
  return (
    <main className=" font-dm_mono px-6">
      
      <div className="text-center m-30">
        <h1 className="text-7xl font-zen mb-2">hi, I'm dawniqueca steele!</h1>
        <h3 className="text-xl mt-7">Atlanta-based interdiscplinary designer, focusing on storytelling and interaction ⋆˚꩜｡</h3>
      </div>
       

        <div className="text-center">
          <h3 className="text-4xl font-zen">selected projects</h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            
            <div className="pt-10 p-8 flex-row gap-8 items-center">
              <Link href="/projects/cococoins">
                <Image 
                className="mb-5 pb-5 rounded transition hover:scale-105"
                src="/banner.png"
                alt="me!"
                width={700}
                height={700}
                />
              </Link>
              <div>
                <h1 className="pl-5 text-4xl font-zen">CocoCoins</h1>
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">product design</p>
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">software dev</p>
              </div>
            </div>
            

            <div className="pt-10 p-8 flex-row gap-6 items-center">
              <Link href="/projects/skin-to-skin">
                <Image 
                className="mb-5 pb-5 rounded transition hover:scale-105"
                src="/banner.png"
                alt="me!"
                width={700}
                height={700}
              />
              </Link>
              <div>
                <h1 className="pl-5 p-8 text-4xl font-zen">SkinToSkin</h1>
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">product design</p>

              </div>
              


            </div>

            <div className="pt-10 p-8 flex-row gap-6 items-center">
              <Link href="/projects/rpgpy">
              <Image 
              className="mb-5 pb-5 rounded transition hover:scale-105"
              src="/banner.png"
              alt="me!"
              width={700}
              height={700}
              />
              </Link>
               <div>
                <h1 className="pl-5 text-4xl font-zen">RPG'py</h1>
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">software dev</p>

              </div>


            </div>
              
          </div>
          
            <Link href="/projects">
            <p className="inline-block px-7 py-5 border rounded-full text-sm font-dm_mono bg-lime-500 text-white shadow-lg hover:bg-lime-600 transition">
            More Works
            </p>
            
            </Link>
        </div>

        
  
        
      </main>
    
    
  );
}
