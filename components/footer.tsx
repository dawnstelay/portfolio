import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="footer font-space h-50 p-5 pt-9 bottom-0 z-0 mt-5 justify-between">
            <h1>interested in working together?</h1>

            <div className="flex gap-4 pt-2 text-sm">
                <a className="" href="https://linkedin.com/in/dawniquecasteele" target="_blank">
                    LinkedIn↗
                </a>
                <a className="" href="https://github.com/dawniquecasteele" target="_blank">
                    Github↗
                </a>

                <a className="" href="https://www.artstation.com/dawnstelay" target="_blank">
                    Artstation↗
                </a>

                <a className="" href="mailto:dawniqsteele@gmail.com">
                    Email↗
                </a>
            </div>


        </div>
    )
}