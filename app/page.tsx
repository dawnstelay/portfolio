'use client'

import Image from "next/image";
import Link from "next/link";
import Card from "../components/card";
import { useState } from "react";

export default function Home() {



  const [active, setActive] = useState(false);

  return (
    <main className="font-urbanist min-h-screen w-full flex flex-col items-center justify-center">

      <section id="hero" className="py-90 h-50 max-w-full flex items-center ml-30 pl-10">
        <div className="flex flex-col items-center justify-center m-auto">
          <h3 className="text-xl mt-7 items-left ">HI, I'M</h3>
          <h1 className="lg:text-7xl text-4xl font-bold">dawniqueca steele</h1>
          <h3 className="text-xl mt-7">An Atlanta-based multidiscplinary designer, focusing on storytelling and interaction ⋆˚꩜｡</h3>
        </div>
        <div className=" justify-center mt-10 w-200">
          <img className="aspect-auto object-contain max-w-full m-auto max-h-300" src="/hero-animation.png" />
        </div>
        
      </section>

      <section id="gallery" className="min-h-120 w-full flex flex-col items-center">
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

      <section id="services" className="scrollcontainer">
        
        
      </section>

      <section id="featured" className="min-h-screen w-full items-center text-center">
       <h1 className="text-3xl"> featured projects</h1>
       <div className=" grid grid-cols-1 md:grid-cols-2 m-20 gap-10 mt-5">
       
        <div className="bg-red-100 m-2 p-10 h-100 rounded-md border-blackbean">
          project 1
        </div>

        <div className="bg-red-100 m-2 p-10 h-100">
          project 1
        </div>

         <div className="bg-red-100 m-2 p-10 h-100">
          project 1
        </div>

         <div className="bg-red-100 m-2 p-10 h-100">
          project 1
        </div>
        </div>
      </section>


      
 {/*

      <section id="projects" className="min-h-screen w-full items-center text-center">
        <h1 className="text-3xl"> featured projects</h1>
        <div className="project-container">

          <ul className="project-cards">
            <li id="proj1" className="proj-card">
              <div className="proj-body flex flex-row">
                <div className="w-[50%]">
                  <img src="banner.png" className="object-cover rounded" />
                </div>

                <div className="flex flex-col text-center items-center pl-10">
                  <h3 className="text-4xl">Cococoins</h3>
                  <p>here is some information about CocoCoins</p>
                </div>

              </div>
            </li>

            <li id="proj2" className="proj-card">
              <div className="proj-body">
                <h3>PROJECT 2</h3>
              </div>
            </li>


            <li id="proj3" className="proj-card">
              <div className="proj-body">
                <h3>PROJECT 3</h3>
              </div>
            </li>


            <li id="proj4" className="proj-card">
              <div className="proj-body">
                <h3>PROJECT 4</h3>
              </div>
            </li>

          </ul>
        </div>


      </section>

    */}

    </main>


  );
}

// tooltip hover over what i do/projects
// interchanging projects -> gallery like, or carousel.. rough
//md:flex-row flex flex-col justify-center text-center m-20 max-h-200 p-10 pr-20 pl-20