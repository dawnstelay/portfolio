'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterBar from "../../components/filters";

export default function Projects() {
   
    const [active, setActive] = useState("all")
    
    const tags = ["all", "animation", "brand design", "product design", "software dev", "visual dev"];

    const projects = [ 
        {
            title: "Bite Me",
            image: "/banner.png",
            tags: ["animation", "visual dev"], 
            link: "/projects/bite-me"
        },

        {
            title: "Charm",
            image: "/banner.png",
            tags: ["brand design"],
            link: "/projects/charm"
        },

        {
            title: "CocoCoins",
            image: "/banner.png",
            tags: ["product design", "software dev"],
            link: "/projects/cococoins"
        },

        {
            title: "Forget Me Not",
            image: "/banner.png",
            tags: ["visual dev"],
            link: "/projects/fmn"
        },

        {
            title: "Perle",
            image: "/banner.png",
            tags: ["brand design"],
            link: "/projects/perle"
        },

        {
            title: "Skin to Skin",
            image: "/banner.png",
            tags: ["product design"],
            link: "/projects/skin-to-skin"
        },

        {
            title: "Smart Evaluator",
            image: "/banner.png",
            tags: ["software dev"],
            link: "/projects/smart-evaluator"
        },
        
    ]

    const filtered = 
        active === "all"
        ? projects
        : projects.filter((p)=> p.tags.includes(active))


    return(
        <main className="font-funnel min-h-screen max-w-full flex flex-col items-center justify-center">
            <div className="py-20 max-w-full items-center m-5">
            <h1 className="py-10 m-10 mb-2 text-6xl font-kiwi text-center">all projects</h1>
            <FilterBar
            tags={tags}
            active={active} 
            setActive={setActive}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project) => (
                        <Link href={project.link} key={project.title} className="projectCard m-2 p-10 transition hover:scale-105">

                            
                            <img src={project.image} alt={project.title} className="rounded" />
                        

                        <h3 className="mt-2 font-zen text-lg"> {project.title} </h3>
                        <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-violet-200 lime-600 text-white">{project.tags}</p>
                        
                            
                            
                        
                        </Link>
                    ))}
                </div>   
            </div>
        </main>
    
    )
}