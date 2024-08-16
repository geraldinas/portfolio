import React from "react";



export default function Header() {
    return (
    <div className="pt-40 font-mono tracking-wide bg-transparent flex flex-col items-center justify-center pb-5">
        <img className="inline object-cover w-40 h-40 mr-2 rounded-full" src="https://img.icons8.com/?size=100&id=RKoVHgQbQEQB&format=png&color=000000" alt="Profile image"/>

        <div className="cursor-pointer  pt-10 top-0 flex flex-col items-center justify-center  space-y-4 ">
          <div className="group inline-flex overflow-hidden text-[length:--size] font-thin leading-none text-white/50 transition [--size:theme(fontSize.5xl)] [--color:theme(textColor.white)] [--duration:280ms] hover:text-[--color]">
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
    </div>
    );
}
