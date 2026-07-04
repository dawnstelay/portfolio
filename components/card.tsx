'use client'

import Image from "next/image";

export default function Card({
    title, 
    image, 
    tags, 
    descriptor, 
    link,
}: {
    title: string
    image: string
    tags: string
    descriptor: string
    link: string
}) {
    
    return (
        <div>
            <div >
                <h2>{title}</h2>
            </div>
        </div>
    )
}

