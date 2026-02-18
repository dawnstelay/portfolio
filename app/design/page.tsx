import Image from "next/image";
import Link from "next/link";

export default function designMain() {
    return(
        <main className="font-mono width-80 float-right justify-right align-right py-32 px-16">
            design projects
            <Link href="/design/fmn"> FMN project</Link>
        </main>
    );
}