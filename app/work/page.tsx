'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import FilterBar from "../../components/filters"

export default function Work() {
   
    const [active, setActive] = useState("all")
    
    const tags = ["all", "ui/ux", "design", "animation", "dev"]

    const projects = [
        {
            title: "",
            image: "",
            tags: "", //Can use ["tag 1", "tag 2"] and so forth.. just for reference lolol
            link: ""
        },
        
    ]

    const filtered = 
        active === "all"
        ? projects
        : projects.filter((p) => p.tags.includes(active))
    return(
        <main className="font-figtree width-80 float-right justify-right align-right py-32 px-16 flex">
            <div>
            <h1>All Projects</h1>
            <FilterBar
            tags={tags}
            active={active}
            setActive={setActive}
            />

            Grid goes here
            
            </div>
        </main>
    
    )
}