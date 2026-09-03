'use client'

import Image from "next/image";
import Link from "next/link";

export default function smartEvaluator(){
    return(
        <main className="font-funnel min-h-screen max-w-full flex flex-col items-center justify-center">
           
           <section id="overview" className="py-40 max-w-full items-center flex flex-row sm:flex-col">
            <div>
                <img className="object-contain aspect-auto" src="/banner.png" />
            </div>

            <div className="flex flex-col">
                <h1 className="text-4xl font-space m-2 font-bold">SMART EVALUATOR</h1>
                <div className="flex flex-row gap-10 m-7">
                    <div className="w-[30%]">
                        Project Type
                        <p>◌ Software/Tool Development</p>
                    </div>
                    <div className="w-[30%]">
                        Tools
                        <p>◌ React.js/Vite</p>
                        <p>◌ Express.js</p>
                        <p>◌ MongoDB</p>
                        <p>◌ ChatGPT4.0/ScrapingBee</p>
                    </div>
                    <div className="w-[30%]">
                        Deliverables
                        <p>◌ Web Application</p>
                        <p>◌ Documentation</p>
                        <p>◌ Pitch Deck</p>
                    </div>
                </div>
            </div>
           </section>


           <section className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">PROBLEM</h1>
           </section>


           <section className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">RESEARCH</h1>
           </section>

           <section className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">PROCESS</h1>
           </section>

           <section className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">FINAL</h1>
           </section>

           <section className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">THOUGHTS</h1>
           </section>
           {/*
           <section className="flex flex-row">
                <section className="text-left p-20 border-r border-dashed w-[60%]">
                    <h3 className="font-zen font-bold text-6xl mb-10 mt-20"> SMART EVALUATOR </h3>
                    <h5>OVERVIEW</h5>
                    <p className="font-zen">An web-based application designed to determine vendibility status of MRO supplies.</p>
                    <div className="flex flex-row m-5 ml-0">
                        <div className="w-[30%]">
                            <h5>PROJECT TYPE</h5>
                            <p className="font-zen">Software Development</p>
                        </div>
                        
                        <div className="w-[30%]">
                            <h5>TOOLS</h5>
                            <p className="font-zen">Express.js, React, MongoDB, ChatGPT4.0, ScrapingBee</p>
                        </div>
                        <div className="w-[30%]">
                            <h5>DELIVERABLES</h5>
                            <p className="font-zen">Web Application, Documentation, Pitch Deck</p>
                        </div>

                    </div>
                </section>
            
                <section className="text-center p-20">
                <h3 className="font-zen text-4xl"> IMAGE</h3>
                </section>

            </section>

            <section className="flex flex-row">
                
                    <ul className="m-10 gap-3 top-0 p-10 sticky z-50 self-start">
                    <li><Link href="#problem" className=" px-4 py-1 items-center border rounded-full bg-lime-200 text-violet-600 m-10">PROBLEM LINK</Link></li>
                    <li><Link href="#research" className="px-4 py-1 items-center border rounded-full bg-lime-200 text-violet-600 m-10">RESEARCH LINK</Link></li>
                    <li><Link href="#process" className="px-4 py-1 items-center border rounded-full bg-lime-200 text-violet-600 m-10">PROCESS LINK</Link></li>
                    <li><Link href="#final" className="px-4 py-1 items-center border rounded-full bg-lime-200 text-violet-600 m-10">FINAL LINK</Link></li>
                    <li><Link href="#thoughts" className="px-4 py-1 items-center border rounded-full bg-lime-200 text-violet-600 m-10">THOUGHTS LINK</Link></li>
                    </ul>
                    
                
                
                <div>
                    <section id="problem" className="h-100 bg-violet-200 text-center w-full">
                        PROBLEM
                    </section>

                    <section id="research" className="h-100 bg-violet-200">
                        RESEARCH
                    </section>
           
                    <section id="process" className="h-100 bg-violet-200">
                        PROCESS
                    </section>

                    <section id="final" className="h-100 bg-violet-200">
                        FINAL
                    </section>

                    <section id="thoughts" className="h-100 bg-violet-200">
                        THOUGHTS
                    </section>

                </div>

            </section>
           
           */}
            
        </main>
    );
}