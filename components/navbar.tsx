import Image from "next/image";
import Link from "next/link";
import ImageModal from "./imagemodal";

export default function Navbar() {
    return(
            <nav className="hidden md:flex md:w-64 flex-col items-center font-figtree text-center p-6">
                <ImageModal
                className="p-6 flex-col"
                src="/logoplaceholder.jpg"
                alt="Logo"
                width={125}
                height={125}
               />

                
                <ul className="text-xl m-4">
                    <li> 
                        <Link href="/">home</Link>
                    </li>

                    <li>
                        <Link href="/work">work</Link>
                    </li>

                    <li>
                        <Link href="/art">art</Link>
                    </li>

                    <li>
                        <Link href="/about">about</Link>
                    </li>
                </ul>

                
                <div className="flex justify-center">
                    <ul>
                        <li>
                            <a href="https://linkedin.com/in/dawniquecasteele" target="_blank" rel="noopener noreferrer">
                            Linkedin
                            </a>
                        </li>
                            
                        <li>
                            <a href="https://github.com/dawniquecasteele" target="_blank" rel="noopener noreferrer"> 
                            Github
                            </a>
                        </li>

                        <li>
                            <a href="https://www.artstation.com/dawnstelay" target="_blank" rel="noopener noreferrer">
                            ArtStation    
                            </a>
                        </li>

                        <li>

                        </li>
                    </ul>

                </div>
                               
            </nav>
       
    );
}