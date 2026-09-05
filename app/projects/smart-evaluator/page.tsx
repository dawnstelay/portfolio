'use client'

import Link from "next/link";
import ProjectNav from "../../../components/projectNav";

export default function SmartEvaluator() {
    return (
        <main className="font-funnel relative flex w-full flex-col items-center">

            <section id="hero" className="py-40 max-w-full items-center flex flex-col">

                <div className="p-5 pb-20 flex flex-col items-center overflow-hidden  w-[90%] ">
                    <h1 className="text-6xl font-space m-2 text-(--blackbean)/75 text-center pb-4 pt-4">Smart Evaluator</h1>
                    <div>
                        <p className="inline-block overflow-hidden rounded-lg bg-(--cornell) p-2 text-(--ivory) font-space text-sm">Software Development</p>
                    </div>
                </div>

                <div className="w-[90%]">
                    <img className="object-contain aspect-auto rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.18)] ring ring-(--blackbean)" src="/banner.png" />
                </div>


            </section>

            <section id="overview" className="flex flex-row mt-0 pt-0 gap-2">
                <div>
                    <div className="overflow-hidden p-2">
                        <h3 className="text-bold text-2xl text-(--cornell)">Tools</h3>
                        <p className="text-xl">React.js/Vite, Express.js, MongoDB, ChatGPT 4.0, ScrapingBee</p>

                    </div>
                    <div className="overflow-hidden p-2">
                        <h3 className="text-bold text-2xl text-(--cornell)">Deliverables</h3>
                        <p className="text-xl"> Web Application, Documentation, Pitch Deck</p>

                    </div>
                </div>

                <div>
                    Here is a bunch of words that help you get a gist of this silly project lol
                </div>



            </section>

            <ProjectNav />


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