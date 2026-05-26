import Image from "next/image";
import Link from "next/link";

export default function smartEvaluator(){
    return(
        <main className="font-mono flex flex-row width-100 justify-between">
            <section className="text-center p-20 border-r border-dashed ">
            <h3 className="font-zen text-4xl"> TEXT </h3>
            </section>
            
            <section className="text-center p-20">
                <h3 className="font-zen text-4xl"> IMAGE</h3>
            </section>
        </main>
    );
}