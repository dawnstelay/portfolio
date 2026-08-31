'use client'

import { useState } from 'react';
import Image from "next/image";
import ImageModal from "../../components/imagemodal";
import FilterBar from '../../components/filters';

export default function Art() { 
    
    const [active, setActive] = useState("all")

    const tags = ["all", "studies", "characters", "illustrations", "environments", "3D", "2D animation"];

    const works = [
        {
            name: "calico",
            image: "/works/calico.png",
            descriptor: "nice place",
            tags: "illustrations"
        },

        {
            name: "cecil iteration",
            image: "/works/Cecil Iteration Sequence.png",
            descriptor: "nice place",
            tags: ["illustrations", "characters"], 
        },

    ]
    
    const filtered = 
        active === "all"
        ? works
        : works.filter((p)=> p.tags.includes(active))


    return(
        <main className="font-funnel min-h-200 w-full flex flex-col items-center justify-center p-10">
            <div className="py-20 max-w-full items-center m-5">
                <h1 className="py-10 m-10 mb-2 text-6xl font-kiwi text-center">Gallery</h1>
                <FilterBar
                tags={tags}
                active={active}
                setActive={setActive}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((work) => (
                       <div key={work.name}>

                        <ImageModal
                            src={work.image}
                            alt={work.name}
                            width={600}
                            height={400}
                            className="rounded transition hover:scale-105"
                            descriptor={work.descriptor}

                        />
                        </div> 
                    ))}
                </div>
                        
                
            </div>
        </main>
    )
}