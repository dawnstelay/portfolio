'use client'
import Image from "next/image";
import Link from "next/link";
import ImageModal from "../components/imagemodal";

export default function Home() {
  return (
    <main className=" font-figtree float-center justify-center align-center py-32 px-64">
      
      <div className=" m-15 pl-5 items-center">
        <h1 className="text-7xl font-bricolage mb-2">hi, I'm dawniqueca steele!</h1>
        <h3 className="text-xl">An interdiscplinary designer, focusing on storytelling and interaction.</h3>
      </div>
       

        <div className="m-auto p-20">
          <h3 className="text-2xl font-bricolage">featured projects</h3>
          <div className="m-auto p-5">
            <div className="pt-10 flex flex-row">
              <Link href="/work/cococoins">
              <Image 
              className="mb-5 pb-5 rounded transition hover:scale-105"
              src="/banner.png"
              alt="me!"
              width={600}
              height={600}
              />
              </Link>
              <div>
                <h1 className="pl-5 text-4xl font-bricolage">CocoCoins</h1>
                <p className=" items-center flex flex-wrap gap-3 mt-2 m-10 px-4 py-1 border rounded-full text-sm font-figtree bg-amber-500 text-white">product design</p>
                <p className=" items-center flex flex-wrap gap-3 mt-2 m-10 px-4 py-1 border rounded-full text-sm font-figtree bg-amber-500 text-white">software dev</p>

              </div>


            </div>
            

            <div className="pt-10 flex flex-row">
              <Link href="/work/skin-to-skin">
              <Image 
              className="mb-5 pb-5 rounded transition hover:scale-105"
              src="/banner.png"
              alt="me!"
              width={600}
              height={600}
              />
              </Link>
              <div>
                <h1 className="pl-5 text-4xl font-bricolage">SkinToSkin</h1>
                <p className=" items-center flex flex-wrap gap-3 mt-2 m-10 px-4 py-1 border rounded-full text-sm font-figtree bg-amber-500 text-white">product design</p>

              </div>
              


            </div>

            <div className="pt-10 flex flex-row">
              <Link href="/work/rpgpy">
              <Image 
              className="mb-5 pb-5 rounded transition hover:scale-105"
              src="/banner.png"
              alt="me!"
              width={600}
              height={600}
              />
              </Link>
               <div>
                <h1 className="pl-5 text-4xl font-bricolage">RPG'py</h1>
                <p className=" items-center flex flex-wrap gap-3 mt-2 m-10 px-4 py-1 border rounded-full text-sm font-figtree bg-violet-200 text-white">software dev</p>

              </div>


            </div>
              
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
