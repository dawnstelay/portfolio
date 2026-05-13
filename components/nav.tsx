//add css to show what page the user is currently on 
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="hidden sm:flex justify-center border-b border-dashed">
        <div className="flex justify-between px-6 py-4 font-dm_mono">
            
            

            <ul className="text-xl m-4 flex flex-row items-center gap-2">
                    <li> 
                        <Link className="navunderlineanim" href="/">home</Link>
                    </li>

                    <li>
                        <Link className="navunderlineanim" href="/projects">projects</Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                className="flex items-center"
                                src="/chrysicon.svg"
                                alt="Logo"
                                width={60}
                                height={60}
                                loading="eager"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="navunderlineanim" href="/art">art</Link>
                    </li>

                    <li>
                        <Link className="navunderlineanim" href="/about">about</Link>
                    </li>
            </ul>

            {/*}
            <ul className="flex gap-2 items-center m-4">
                
                <a className="navunderlineanim" href="https://linkedin.com/in/dawniquecasteele" target="_blank">
                    <Image
                        className="flex"
                        src="/linkedin.svg"
                        alt="LinkedinLogo"
                        width={20}
                        height={20}
                    />
                </a>
                <a className="navunderlineanim" href="https://github.com/dawniquecasteele" target="_blank">
                    <Image
                        className="flex"
                        src="/github.svg"
                        alt="GithubLogo"
                        width={20}
                        height={20}
                    />
                </a>
                    
                <a className="navunderlineanim" href="https://www.artstation.com/dawnstelay" target="_blank">
                    <Image
                        className="flex"
                        src="/artstation.svg"
                        alt="ArtstationLogo"
                        width={20}
                        height={20}
                    />
                </a>
            </ul>
            */}
        

        </div>
        </nav>
    )
}
