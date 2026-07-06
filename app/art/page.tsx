'use client'

import { useState } from 'react';
import Image from "next/image";
import ImageModal from "../../components/imagemodal";
import FilterBar from '../../components/filters';

export default function Art() { 
    
    const [active, setActive] = useState("all")

    const tags = ["all", "studies", "characters", "illustrations", "environments", "3D"];

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
        <main className="font-mono flex px-6">
            <div>
                <h1 className="m-10 text-4xl font-zen font-bold text-left">Gallery</h1>
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