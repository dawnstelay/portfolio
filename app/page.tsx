'use client'
import Image from "next/image";
import Link from "next/link";
import ImageModal from "../components/imagemodal";

export default function Home() {
  return (
    <main className="font-dm_mono">
      
      <div className="justify-center text-center m-30">
        <Image
        className="flex justify-center items-center ml-auto mr-auto"
        src="/title.svg"
        alt="me!"
        width= {900}
        height= {900}
        />
        <h3 className="text-xl mt-7">Atlanta-based interdiscplinary designer, focusing on storytelling and interaction ⋆˚꩜｡</h3>
      </div>
       

        <section className="text-center">
          <h3 className="text-4xl font-zen bg-lime-200 pb-2">selected projects</h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 ml-auto mr-auto justify-center">
            
            <div className="pt-10 p-8 flex-row gap-8 items-center ml-auto mr-auto">
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
                <h1 className="pl-5 text-4xl font-zen text-left">CocoCoins</h1>
                <h3 className="pl-5 mt-2 text-lg text-left">Some details about CocoCoins</h3>
                <div className = "text-left m-5">
                <p className="inline-block px-4 py-1 mr-2 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">product design</p>
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">software dev</p>
                </div>
              </div>
            </div>
            

            <div className="pt-10 p-8 flex-row gap-6 items-center ml-auto mr-auto">
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
                <h1 className="pl-5 text-4xl font-zen text-left">Skin-to-Skin</h1>
                <h3 className="pl-5 mt-2 text-lg text-left">Some details about sts</h3>
                <div className = "text-left m-5">
                <p className="inline-block px-4 py-1 mr-2 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">product design</p>
                </div>
              </div>
            </div>

            <div className="pt-10 p-8 flex-row gap-6 items-center ml-auto mr-auto">
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
                <h1 className="pl-5 text-4xl font-zen text-left">RPG'py</h1>
                <h3 className="pl-5 mt-2 text-lg text-left">Some details about RPG'py</h3>
                <div className = "text-left m-5">
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-lime-600 text-white">software dev</p>
                </div>
              </div>
            </div>
              
          </div>
            <Link href="/projects">
            <p className="inline-block px-7 py-5 border rounded-full text-sm font-dm_mono bg-lime-500 text-white shadow-lg hover:bg-lime-600 transition">
            More Works
            </p>
            
            </Link>
        </section>


        <section>
          <h3 className="text-center text-4xl font-zen">Gallery</h3>

          <div className="m-20">
            FILLER
          </div>
        </section>

        
  
        
      </main>
    
    
  );
}
