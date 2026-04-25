import Image from "next/image";
import Link from "next/link";
import ImageModal from "./imagemodal";

export default function Navbar() {
    return(
            <nav className="hidden md:flex flex-col w-64 items-center font-figtree p-6">
                <Image
                className="p-6 flex flex-col items-center"
                src="/ducky.svg"
                alt="Logo"
                width={150}
                height={150}
               />

                <ul className="text-xl m-4 flex flex-col justify-center text-center">
                    <li> 
                        <Link className="navunderlineanim" href="/">home</Link>
                    </li>

                    <li>
                        <Link className="navunderlineanim" href="/work">work</Link>
                    </li>

                    <li>
                        <Link className="navunderlineanim" href="/art">art</Link>
                    </li>

                    <li>
                        <Link className="navunderlineanim" href="/about">about</Link>
                    </li>
                </ul>

                <span className=" m-7 items-center h-[1px] w-25 bg-black"></span>
                <div className="flex justify-center m-7 text-sm">
                    <ul className="flex flex-col items-center">
                        <li>
                            <a className="navunderlineanim" href="https://linkedin.com/in/dawniquecasteele" target="_blank" rel="noopener noreferrer">
                            Linkedin
                            </a>
                        </li>
                            
                        <li>
                            <a className="navunderlineanim" href="https://github.com/dawnstelay" target="_blank" rel="noopener noreferrer"> 
                            Github
                            </a>
                        </li>

                        <li>
                            <a className="navunderlineanim" href="https://www.artstation.com/dawnstelay" target="_blank" rel="noopener noreferrer">
                            ArtStation    
                            </a>
                        </li>

                        <li>
                            <a className="navunderlineanim" href="https://www.canva.com/design/DAHDPtF8Ikg/O2m4WaYvdCHbSbvyTpc4ZQ/view?utm_content=DAHDPtF8Ikg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67a7ae7149" 
                            target="_blank" rel="noopener noreferrer">
                            Resume
                            </a>
                        </li>
                    </ul>

                </div>
                               
            </nav>
       
    );
}

// violet-100 -200 , indigo -300, lime -200 -500 -600 