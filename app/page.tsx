'use client'

import Image from "next/image";
import Link from "next/link";
import Card from "../components/card";
import { useState } from "react";

export default function Home() {

  const projects= [
    {
      title: "CocoCoins",
      image: "/banner.png",
      tags: ["", ""],
      descriptor: "Information about CocoCoins will go here.",
      link: "/projects/cococoins"
    },

    {
      title: "Skin to Skin",
      image: "/banner.png",
      tags: ["", ""],
      descriptor: "Information about sts will go here.",
      link: "/projects/skin-to-skin"
    },

    {
      title: "RPG'py",
      image: "/banner.png",
      tags: ["", ""],
      descriptor: "Information about rpgpy will go here.",
      link: "/projects/rpgpy"
    }
  ]

  const [active, setActive] = useState(false);
  
  return (
    <main className="font-dm_mono justify-center">
      
      <section id="hero" className="md:flex-row flex flex-col justify-center align-center text-center m-20">
        <div className="flex flex-col text-center items-center justify-center max-w-[50%] m-auto">
          <h3 className="text-xl mt-7">hi, my name is</h3>
          <h1 className="text-6xl font-dela">dawniqueca steele</h1>
          <h3 className="text-xl mt-7">Atlanta-based interdiscplinary designer, focusing on storytelling and interaction ⋆˚꩜｡</h3>
        </div>
        <img className= " h-[75%] object-fit aspect-auto m-auto justify-center mt-10 ml-10 max-w-[50%]" src="/placeholder.gif"/>
        <div>
 
        </div>
      </section>


      <section id="services" className="justify-center text-center p-20 m-10">
        <h3> what I do</h3>
        <ul className="flex justify-center text-center">
          <li>
            <Link href="/dev">
              <Image
                className=""
                src="/logoplaceholder.jpg"
                alt="test"
                width={50}
                height={50}  
                />
                dev
            </Link>
          </li>

          <li>
            <Link href="/design">
              <Image
                className=""
                src="/logoplaceholder.jpg"
                alt="test"
                width={50}
                height={50}
              />
              design
            </Link>
          </li>

          <li>
            <Link href="/art">
              <Image 
                className=""
                src="/logoplaceholder.jpg"
                alt="test"
                width={50}
                height={50}
              />
              art
            </Link>
          </li>

        </ul>
      </section>
       

        <section className="text-center">
          <h3 className="text-4xl font-zen font-bold pb-2">selected projects</h3>
          
          <div className="flex flex-col ml-auto mr-auto justify-center">
            
            <div className="pt-10 p-8 flex-col gap-8 items-center ml-auto mr-auto">
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
                <p className="inline-block px-4 py-1 mr-2 border rounded-full text-sm font-dm_mono bg-violet-200 text-white">product design</p>
                <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-violet-200 text-white">software dev</p>
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

// tooltip hover over what i do/projects
// interchanging projects -> gallery like, or carousel.. rough