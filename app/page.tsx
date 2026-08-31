'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [active, setActive] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <main className={"font-funnel min-h-screen max-w-full flex flex-col items-center justify-center"}>

      <section id="hero" className="py-90 h-50 max-w-full flex items-center">
        <div className="flex flex-col items-center justify-center m-10">
          <h3 className="font-kiwi text-2xl mt-7 text-left ">hi, I'm</h3>
          <h1 className="lg:text-7xl text-4xl font-kiwi m-2">dawniqueca steele</h1>
          <h3 className="text-lg mt-7 font-space">An Atlanta-based multidiscplinary designer, focusing on storytelling and interaction ⋆˚꩜｡</h3>
        </div>
        <div className=" justify-center mt-10 w-200">
          <img className="aspect-auto object-contain m-auto" src="/hero-animation.png" />
        </div>

      </section>

      <section id="gallery" className="min-h-120 w-full flex flex-col items-center">

        <div className="carouselContainer">
          <div className="carousel">
            <div className="carouselCard">1</div>
            <div className="carouselCard">2</div>
            <div className="carouselCard">3</div>
            <div className="carouselCard">4</div>
            <div className="carouselCard">5</div>
            <div className="carouselCard">6</div>
          </div>
          <div aria-hidden className="carousel">
            <div className="carouselCard">1</div>
            <div className="carouselCard">2</div>
            <div className="carouselCard">3</div>
            <div className="carouselCard">4</div>
            <div className="carouselCard">5</div>
            <div className="carouselCard">6</div>
          </div>
        </div>
      </section>


      <section id="featured" className="min-h-screen max-w-screen items-center text-center">
        
        <h1 className="text-3xl"> featured projects</h1>
        
        <div className="grid grid-cols-1 md:flex gap-3 items-center justify-center ">
          <button className="bg-(--sky) pl-10 pr-10 w-10">favorites</button>
          <button className="bg-(--sky) pl-10 pr-10">dev</button>
          <button className="bg-(--sky) pl-10 pr-10">design</button>
          <button className="bg-(--sky) pl-10 pr-10">art</button>

        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 m-20 gap-10 mt-5">



          <div className="projectCard m-2 p-10 h-100">
            <h3 className="text-bold text-left m-2">CocoCoins</h3>
            <img className="" src="/banner.png" />
            <p className="m-2 text-left">descriptor blah blah blah</p>
          </div>

          <div className="projectCard m-2 p-10 h-100">
            <h3 className="text-bold text-left m-2">CocoCoins</h3>
            <img className="" src="/banner.png" />
            <p className="m-2 text-left">descriptor blah blah blah</p>
          </div>

          <div className="projectCard m-2 p-10 h-100">
            <h3 className="text-bold text-left m-2">CocoCoins</h3>
            <img className="" src="/banner.png" />
            <p className="m-2 text-left">descriptor blah blah blah</p>
          </div>

          <div className="projectCard m-2 p-10 h-100">
            <h3 className="text-bold text-left m-2">CocoCoins</h3>
            <img className="" src="/banner.png" />
            <p className="m-2 text-left">descriptor blah blah blah</p>
          </div>


        </div>
      </section>


      <section id="demo-reel" className="">

      </section>

    </main>


  );
}


// interchanging projects -> gallery like, or carousel.. rough
