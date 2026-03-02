import Image from "next/image";
import Link from "next/link";

export default function devMain() {
    return(
        <main className="font-mono width-80 float-right justify-right align-right py-32 px-16">
            <h1 className="text-8xl font-dongle mb-2">Dev Projects</h1>
            <Link href="/dev/smart_evaluator">
            <Image
            className=""
            src="/logoplaceholder.jpg"
            alt="smart eval depictors"
            width={30}
            height={30}
            />
            Smart Evaluator</Link>
        </main>
    );
}