'use client'

import Image from "next/image";
import Link from "next/link";
import Card from "../components/card";
import { useState } from "react";

export default function Home() {



  const [active, setActive] = useState(false);

  return (
    <main className="font-urbanist min-h-screen w-full flex flex-col items-center justify-center">

      <section id="hero" className="min-h-screen w-full flex items-center">
        <div className="flex flex-col items-center justify-center m-auto">
          <h3 className="text-xl mt-7 items-left ">HI, I'M</h3>
          <h1 className="lg:text-7xl text-4xl font-bold">dawniqueca steele</h1>
          <h3 className="text-xl mt-7">An Atlanta-based multidiscplinary designer, focusing on storytelling and interaction ⋆˚꩜｡</h3>
        </div>
        <div className=" justify-center mt-10 w-200">
          <img className="aspect-auto object-contain max-w-full m-auto max-h-100" src="/placeholder.gif" />
        </div>

        <div>

        </div>
      </section>


      <section id="services" className="services min-h-100 w-full  text-center items-center">
       <div className="services-header">
        <h3>what i do</h3>
       </div>

       <div className="card-container">
        <div id="card1" className="servicecard">
          <div className="cardfront">
            <img className="object-cover w-[100%] h-[100%]" src="logoplaceholder.jpg" alt="" width="100" height="100" />
          </div>
          <div className="cardback">
            <span>( 01 )</span>
            <p>App Development, Game Design, ...</p>
          </div>
        </div>


        <div id="card2" className="servicecard">
          <div className="cardfront">
            <img className="object-cover w-[100%] h-[100%]" src="logoplaceholder.jpg" alt="" width="100" height="100"/>
          </div>
          <div className="cardback">
            <span>( 02 )</span>
            <p>Product Design, Graphic Design ...</p>
          </div>
        </div>

        <div id="card3" className="servicecard">
          <div className="cardfront">
            <img className="object-cover w-[100%] h-[100%]" src="logoplaceholder.jpg" alt="" width="100" height="100"/>
          </div>
          <div className="cardback">
            <span>( 03 )</span>
            <p>Illustration, Animation ...</p>
          </div>
        </div>
       </div>
       
       
      </section>


      <section id="projects" className="min-h-screen w-full items-center text-center">
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
              <div className="text-left m-5">
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
              <div className="text-left m-5">
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
              <div className="text-left m-5">
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


      <section id="gallery" className="min-h-screen w-full flex flex-col items-center">
        <h3 className="text-center text-4xl font-zen">Gallery</h3>

        <div className="carousel">
          <div className="group"> 
            <div className="carouselcard">1</div>
            <div className="carouselcard">2</div>
            <div className="carouselcard">3</div>
            <div className="carouselcard">4</div>
            <div className="carouselcard">5</div>
            <div className="carouselcard">6</div>
          </div>
          <div aria-hidden className="group"> 
            <div className="carouselcard">1</div>
            <div className="carouselcard">2</div>
            <div className="carouselcard">3</div>
            <div className="carouselcard">4</div>
            <div className="carouselcard">5</div>
            <div className="carouselcard">6</div>
          </div>
        </div>
      </section>




    </main>


  );
}

// tooltip hover over what i do/projects
// interchanging projects -> gallery like, or carousel.. rough
//md:flex-row flex flex-col justify-center text-center m-20 max-h-200 p-10 pr-20 pl-20