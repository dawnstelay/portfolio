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
            name: "",
            image: "",
            tags: ""
        },

    ]
    
    const filtered = 
        active === "all"
        ? works
        : works.filter((p)=> p.tags.includes(active))


    return(
        <main className="font-figtree width-80 float-right justify-right align-right flex py-32 px-16">
            <div>
                <h1>All Art</h1>
                <FilterBar
                tags={tags}
                active={active}
                setActive={setActive}
                />
                
            </div>
        </main>
    )
}