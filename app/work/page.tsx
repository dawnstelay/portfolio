'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterBar from "../../components/filters";

export default function Work() {
   
    const [active, setActive] = useState("all")
    
    const tags = ["all", "animation", "brand design", "product design", "software dev", "visual dev"];

    const projects = [
        {
            title: "Bite Me",
            image: "/banner.png",
            tags: ["animation", "visual dev"], 
            link: "/work/bite-me"
        },

        {
            title: "Charm",
            image: "/banner.png",
            tags: ["brand design"],
            link: "/work/charm"
        },

        {
            title: "CocoCoins",
            image: "/banner.png",
            tags: ["product design", "software dev"],
            link: "/work/cococoins"
        },

        {
            title: "Forget Me Not",
            image: "/banner.png",
            tags: ["visual dev"],
            link: "/work/fmn"
        },

        {
            title: "Perle",
            image: "/banner.png",
            tags: ["brand design"],
            link: "/work/perle"
        },

        {
            title: "RPGPy",
            image: "/banner.png",
            tags: ["software dev"],
            link: "/work/rpgpy"
        },

        {
            title: "Skin to Skin",
            image: "/banner.png",
            tags: ["product design"],
            link: "/work/skin-to-skin"
        },

        {
            title: "Smart Evaluator",
            image: "/banner.png",
            tags: ["software dev"],
            link: "/work/smart-evaluator"
        },
        
    ]

    const filtered = 
        active === "all"
        ? projects
        : projects.filter((p)=> p.tags.includes(active))


    return(
        <main className="font-figtree width-80 float-right justify-right align-right py-32 px-16 flex">
            <div>
            <h1>All Projects</h1>
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

                        <h3 className="mt-2 font-figtree text-lg"> {project.title} </h3>
                        </Link>
                    ))}
                </div>   
            </div>
        </main>
    
    )
}