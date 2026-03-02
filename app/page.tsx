'use client'
import Image from "next/image";
import Link from "next/link";
import ImageModal from "../components/imagemodal";

export default function Home() {
  return (
    <main className=" font-figtree width-80 float-right justify-right align-right py-32 px-16">
      
      <div className=" pl-5 items-center">
        <h1 className="text-8xl font-dongle mb-2">hi, I'm dawniqueca steele!</h1>
        <h3 className="text-xl">An interdiscplinary designer and developer.</h3>
      </div>
       

        <div className="m-auto p-5 text-xl">
          What I do
          <div className="flex items-center justify-between">
            
            <Link href="/animation" className="">
            Animation
            <Image
            className=""
            src="/logoplaceholder.jpg"
            alt="animation stamp logo"
            width={30}
            height={30}
            />
            </Link>

            <Link href="/design" className="">
            Design
            <Image
            className=""
            src="/logoplaceholder.jpg"
            alt="design stamp logo"
            width={30}
            height={30}
            />
            </Link>

            <Link href="/dev" className="">
            Dev
            <Image
            className=""
            src="/logoplaceholder.jpg"
            alt="dev stamp logo"
            width={30}
            height={30}
            />
            </Link>

          </div>
        </div>

        <div>
          Featured Projects
        </div>
        
        
       
        
        
        
      </main>
    
    
  );
}
