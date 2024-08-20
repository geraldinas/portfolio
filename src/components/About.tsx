import React from "react";
import Socials from './Socials.tsx'


export default function About({arrowIcon, timelineRef}) {
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
    }

    const aboutMe = (
        <div className="font-mono flex flex-col items-center justify-center text-zinc-50 p-10 pb-20">
            <p className=" cursor-pointer text-sm md:hover:scale-125 md:transition ease-in-out md:max-w-6xl md:text-lg">
              Hello! I’m a Software Engineer currently based in NYC, with a unique background that bridges the worlds of art and technology. My journey began with a deep passion for music and large-scale painting, where I learned the power of creativity and expression on a grand scale. This artistic foundation naturally evolved into a fascination with technology, sparked during my college years through exploratory projects with Arduino and AI.
              <br></br>
              <br></br>
              Over time, this curiosity transformed into a love for web development, fueled by self-learning and formal training at the Flatiron School. I’m particularly passionate about integrating art into tech, creating solutions that not only function efficiently but also resonate on a deeper, more human level. I believe in a harmonious approach to technology—one that enhances our connection to each other and the world around us.
              <br></br>
              <br></br>
              Beyond coding, I’m deeply committed to mentorship, fostering diversity in tech spaces, and advocating for accessibility. I also have a strong appreciation for beautifully written documentation, understanding that clarity and elegance in code can transform how we communicate and collaborate. My mission is to contribute to projects that expand our potential while keeping the human touch at the forefront.
            </p>
        </div>
    );

    return (
    <div className="pt-40 font-mono tracking-wide bg-transparent flex flex-col items-center justify-center pb-5 snap-start">
        <img className="inline object-cover w-40 h-40 mr-2 rounded-full" src="https://img.icons8.com/?size=100&id=RKoVHgQbQEQB&format=png&color=000000" alt="icon"/>

        <div className="cursor-pointer  pt-10 top-0 flex flex-col items-center justify-center  space-y-4 ">
          <div className="group inline-flex overflow-hidden text-[length:--size] font-thin leading-none text-white/50 transition [--size:theme(fontSize.3xl)] lg:[--size:theme(fontSize.5xl)] [--color:theme(textColor.white)] [--duration:280ms] hover:text-[--color]">
            <span className="transition delay-0 duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              G
            </span>

            <span className="transition delay-[30ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              E
            </span>

            <span className="transition delay-[60ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              R
            </span>

            <span className="transition delay-[90ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              A
            </span>

            <span className="transition delay-[120ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              L
            </span>

            <span className="transition delay-[180ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              D
            </span>

            <span className="transition delay-[210ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              I
            </span>
            <span className="transition delay-[240ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              N
            </span>
            <span className="transition delay-[270ms] duration-[--duration] [text-shadow:0_1em_0_var(--color)] group-hover:-translate-y-[--size]">
              A
            </span>
            <span className="uppercase pl-2">Alvarez</span>
          </div>
        </div>
        <Socials/>
        {aboutMe}
        <button onClick={handleScroll} className="pt-20 animate-bounce w-8 h-8">
        {arrowIcon}
      </button>
    </div>
    );
}
