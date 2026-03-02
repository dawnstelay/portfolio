import Image from "next/image";
import Link from "next/link";


export default function Illustration() {
    return(
        <main className="font-figtree width-80 float-right justify-right align-right py-32 px-16">
            <h1 className="text-8xl font-dongle mb-2">Illustration Projects</h1>
            <Link href="/illustration/fmn"> FMN project</Link>
            <Link href="illustration/bite-me">Bite Me</Link>
        </main>
    );
}