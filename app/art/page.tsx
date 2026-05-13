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
        <main className="font-mono flex px-6">
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