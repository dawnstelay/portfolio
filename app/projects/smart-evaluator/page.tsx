'use client'

import Link from "next/link";

export default function smartEvaluator(){
    return(
        <main className="font-funnel min-h-screen max-w-full flex flex-col items-center justify-center">
           
           <section id="overview" className="py-40 max-w-full items-center flex flex-row sm:flex-col">
            <div >
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


           <section id="problem" className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">PROBLEM</h1>
           </section>


           <section id="research" className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">RESEARCH</h1>
           </section>

           <section id="process" className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">PROCESS</h1>
           </section>

           <section id="final" className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">FINAL</h1>
           </section>

           <section id="final" className="min-h-screen max-w-screen items-center text-center">
            <h1 className="text-4xl font-space m-2">THOUGHTS</h1>
           </section>
          
        </main>
    );
}