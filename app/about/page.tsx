import Image from "next/image";

export default function About() {
    return(
        <main className="font-figtree width-80 float-right justify-right align-right py-32 px-16">
            
            <div className="ml-20 flex flex-row">
                <Image 
                src="/logoplaceholder.jpg"
                alt="me!"
                width={125}
                height={125}
                />

                <div className="ml-10 mr-70">
                <h1 className="text-8xl font-dongle mb-2">hi again!</h1>
                <p>My name is Dawniqueca (pronounced daw-nee-qua) and I'm 
                a freelance designer. I graduated from Kennesaw 
                State University with a B.S. in Software Engineering and M.A. in 
                Digital Animation. Ultimately, I care about blending art and tech together to 
                create unique experiences for our audience. Whether it be product design, 
                animation, or game development, I am all for it! 
                </p>
                </div>
            </div>
            
        </main>
    );
}