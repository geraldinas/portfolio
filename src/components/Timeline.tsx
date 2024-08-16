import React from "react"
import { lightIcon } from "../App";


export default function Timeline() {
    return (
        <section className="cursor-pointer pt-60 font-mono flex bg-transparent justify-content-ceenter min-h-screen px-20 bg-gray-100 pt-10">
            <div className="w-100">
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase"> <span  className="pr-2">{lightIcon}</span>Experience</h2>
                <ul>
                    {/* ___________________first item________________________ */}
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-xl text-zinc-50 font-bold">Freelance Software Engineer
                                <span className="self-center capitalize text-sm font-light pl-2">01-04-2023 - Present</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize">Helped build websites and shit</p>
                        </div>
                    </li>
                    {/* ___________________second item________________________ */}
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-xl text-zinc-50 font-bold">Software Engineer: Vice Media
                                <span className="self-center capitalize text-sm font-light pl-2">15-11-2015 - 03-04-2023</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize">Helped build websites and shit</p>
                        </div>
                    </li>
                </ul>
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase pt-10"> <span  className="pr-2">{lightIcon}</span>Education</h2>
                <ul>
                    <li className="relative flex items-baseline gap-6 pb-5">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div>
                                <p className="flex items-stretch text-xl text-zinc-50 font-bold">Software Engineer: Vice Media
                                    <span className="self-center capitalize text-sm font-light pl-2">15-11-2015 - 03-04-2023</span>
                                </p>
                                <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize">Helped build websites and shit</p>
                            </div>
                        </li>
                </ul>
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase pt-10"> <span  className="pr-2">{lightIcon}</span>Community</h2>
            </div>
        </section>
    );
}
