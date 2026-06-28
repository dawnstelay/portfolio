'use client'

import Image from "next/image";
import Link from "next/link";

export default function smartEvaluator(){
    return(
        <main className="font-dm_mono width-100 justify-between">
           <section className="flex flex-row">
                <section className="text-center p-20 border-r border-dashed ">
                    <h3 className="font-zen text-4xl"> SMART EVALUATOR </h3>
                    <h5>OVERVIEW</h5>
                    <div className="flex flex-col">
                        <div>
                            <h5>PROJECT TYPE</h5>
                        </div>
                        
                        <div>
                            <h5>TOOLS</h5>
                        </div>
                        <div>
                            <h5>DELIVERABLES</h5>
                        </div>

                    </div>
                </section>
            
                <section className="text-center p-20">
                <h3 className="font-zen text-4xl"> IMAGE</h3>
                </section>

            </section>

            <section className="flex flex-row">
                <div className="w-20 b-0">
                    <a>PROBLEM LINK</a>
                    <a>RESEARCH LINK</a>
                    <a>PROCESS LINK</a>
                    <a>FINAL LINK</a>
                    <a>THOUGHTS LINK</a>
                </div>
                
                <div>
                    <section>
                        PROBLEM
                    </section>

                    <section>
                        RESEARCH
                    </section>
           
                    <section>
                        PROCESS
                    </section>

                    <section>
                        FINAL
                    </section>

                    <section>
                        THOUGHTS
                    </section>

                </div>

            </section>
           
           
            
        </main>
    );
}