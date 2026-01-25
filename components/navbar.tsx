import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
            <nav className="font-mono justify-center">
                <Image
                className="m-auto flex"
                src="/logoplaceholder.jpg"
                alt="Logo"
                width={125}
                height={125}
               />

                <h1 className="flex p-5 text-3xl">DAWNIQUECA STEELE</h1>
                <ul className="text-xl m-2">
                    <li> 
                        <Link href="/">HOME</Link>
                    </li>
                    
                    <li>
                        <Link href="/animation">ANIMATION</Link>
                    </li>

                    <li>
                        <Link href="/design">DESIGN</Link>
                    </li>

                    <li>
                        <Link href="/dev">DEV</Link>
                    </li>

                    <li>
                        <Link href="/gallery">GALLERY</Link>
                    </li>

                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                </ul>

                
                <div className="flex justify-center items-center">
                    <a href="https://linkedin.com/in/dawniquecasteele" target="_blank" rel="noopener noreferrer">
                        <Image
                        className=" ml-2 mr-2"
                        src="/linkedin.svg"
                        alt="Linkedin Logo"
                        width={30}
                        height={30}
                        />
                    </a>

                    <a href="https://github.com/dawniquecasteele" target="_blank" rel="noopener noreferrer"> 
                        <Image 
                        className=" ml-2 mr-2"
                        src="/github.svg"
                        alt="Github Logo"
                        width={30}
                        height={30}
                        />
                    </a>

                    <a href="mailto:dawniqsteele@gmail.com">
                        <Image 
                        className=" ml-2 mr-2"
                        src="/email.svg"
                        alt="Email Logo"
                        width={30}
                        height={30}
                        />
                    </a>

                    <a href="https://www.artstation.com/dawnstelay" target="_blank" rel="noopener noreferrer">
                        <Image
                        className=" ml-2 mr-2"
                        src="/artstation.svg"
                        alt="Artstation Logo"
                        width={30}
                        height={30}
                        />
                    </a>

                </div>
                


                
            </nav>
       
    );
}