import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return(
        <div className="font-dm_mono w-full bottom-0 bg-lime-200 p-5 mt-5 justify-between">
            <h1>interested in working together?</h1>
            
                <div className="flex gap-4 pt-2 text-sm">
                    <a className="navunderlineanim" href="https://linkedin.com/in/dawniquecasteele" target="_blank">
                        LinkedIn↗
                    </a>
                    <a className="navunderlineanim" href="https://github.com/dawniquecasteele" target="_blank">
                        Github↗
                    </a>
                    
                    <a className="navunderlineanim" href="https://www.artstation.com/dawnstelay" target="_blank">
                        Artstation↗
                    </a>

                    <a className="navunderlineanim" href="mailto:dawniqsteele@gmail.com">
                        Email↗
                    </a>
                </div>
            

        </div>
    )
}