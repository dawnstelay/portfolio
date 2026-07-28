'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterBar from "../../components/filters";

export default function Dev() {
    
    const [active, setActive] = useState("all") 
    
    const tags = ["all", "app dev", "game dev", "shader"]

    const projects = [

        {
            title: "CocoCoins",
            image: "/banner.png",
            tags: ["app dev"],
            link: "/projects/cococoins"
        },

        {
            title: "Smart Evaluator",
            image: "/banner.png",
            tags: ["app dev"],
            link: "/projects/smart-evaluator"
        },

        {
            title: "Minimax",
            image: "/banner.png",
            tags: ["game dev"],
            link: "/"
        }
    ]
    
    
    const filtered = 
        active === "all"
        ? projects
        : projects.filter((p)=> p.tags.includes(active))


    return(
        <main className="font-urbanist min-h-200 w-full flex flex-col items-center justify-center p-10">
            <div>
            <h1 className="m-10 text-4xl font-zen font-bold text-left">ALL PROJECTS</h1>
            <FilterBar
            tags={tags}
            active={active} 
            setActive={setActive}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project) => (
                        <Link key={project.title} href={project.link}>
                    

                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="rounded transition hover:scale-105"
                        />

                        <h3 className="mt-2 font-zen text-lg"> {project.title} </h3>
                        <p className="inline-block px-4 py-1 border rounded-full text-sm font-dm_mono bg-violet-200 lime-600 text-white">{project.tags}</p>
                        </Link>
                    ))}
                </div>   
            </div>
        </main>
    
    )
}