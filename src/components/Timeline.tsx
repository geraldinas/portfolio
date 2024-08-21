import React from "react"
import { lightIcon } from "../App";


export default function Timeline(timelineRef) {
    return (
        <section className="cursor-pointer pt-60 font-mono bg-transparent min-h-screen max-w-5xl inline-block box-border lg:pl-44">
            <div className="w-100">
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase"> <span  className="pr-2">{lightIcon}</span>Experience</h2>
                <ul>
                    {/* ___________________1st item________________________ */}
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-base md:text-lg lg:text-xl text-zinc-50 font-bold">Freelance Software Engineer
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">03/23 - Present</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                                <ul className="list-disc">
                                    <li>
                                    Added new tools and fixed bugs to enhance the Sinclair Company’s site and featured drops
                                    </li>
                                </ul>
  
                            </p>
                        </div>
                    </li>
                    {/* ___________________2nd item________________________ */}
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-base lg:text-xl text-zinc-50 font-bold">Software Engineer II: Vice Media
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">01/21 - 03/23</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                    <li>Unified React/Express front end for 15 VICE verticals, refactoring CMS and user-facing sites􏰀</li>
                                    <li>Automated translation workflows with scripts, reducing manual spreadsheet work􏰀</li>
                                    <li>Improved accessibility in user-facing applications.</li>
                                    <li>Built custom UI Kit Components using Figma</li>
                                </ul>
                            </p>
                        </div>
                    </li>
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-base lg:text-xl text-zinc-50 font-bold">Software Engineer I: Vice Media
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">04/16 - 02/21</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                    <li>Created Style Guide and UI components using Vue.js and JavaScript􏰀</li>
                                    <li>Maintained and refactored the Vice Video Player􏰀</li>
                                    <li>Authored documentation for processes like onboarding and in house tools.</li>
                                    <li>Mentored Software Engineer Summer Intern in React & React Native</li>
                                    <li>Migrated legacy PHP CMS to Vue</li>
                                </ul>
                            </p>
                        </div>
                    </li>
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-base lg:text-xl text-zinc-50 font-bold">Ads Engineer: Vice Media
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">11/15 - 04/16</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                    <li>Transitioned legacy PHP code to a React app using modern JavaScript frameworks􏰀</li>
                                    <li>Built a Ruby-based importer to integrate Vice content with Apple News.</li>
                                </ul>
                            </p>
                        </div>
                    </li>
                    {/* ___________________ 3 item________________________ */}
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-base lg:text-xl text-zinc-50 font-bold">Engineering Intern: Kickstarter
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline"> 06/15 - 10/15</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>Developed an in-house link shortener for shared content URLs</li>
                                <li>Resolved bugs in the checkout system of Kickstarter's user-facing application.</li>
                            </ul>   
                            </p>
                        </div>
                    </li>
                    
                    {/* ___________________ 4 item________________________ */}
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="flex items-stretch text-base lg:text-xl text-zinc-50 font-bold">Spanish Assistant Professor: College of Charleston
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">01/12 - 10/13
                                </span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                                <ul className="list-disc">
                                    <li>
                                    Taught college-level Spanish courses, including speech classes, and contributed to lesson plan development.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </li>
                </ul>
                {/* ___________________ COMMUNITY________________________ */}
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase pt-10"> <span  className="pr-2">{lightIcon}</span>Community</h2>
                <ul>
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">NYC Media Ambasador: Tech Talent Piepeline
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>
                                Increasing diversity and computer science education in k-12
                                </li>
                                <li>
                                Presented at NYC talent pipeline events and led educational workshops.
                                </li>

                            </ul>
                        </p>
                    </div>
                </li>
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Railsbridge | Women Who Code Instructor
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>
                                Facilitated coding workshops and training.
                                </li>                                
                            </ul>
                        </p>
                    </div>
                </li>                        
                </ul>
                {/* ___________________ EDUCATION________________________ */}
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase pt-10"> <span  className="pr-2">{lightIcon}</span>Education</h2>
                <ul>
                    <li className="relative flex items-baseline gap-6 pb-5">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div>
                                <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Flatiron School: Tech Talent Pipeline
                                    <span className="self-center capitalize text-sm font-light pl-2  hidden md:inline">2015</span>
                                </p>
                                <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize">Full Stack Engineering Bootcamp</p>
                            </div>
                        </li>
                        <li className="relative flex items-baseline gap-6 pb-5">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div>
                                <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">College of Charleston
                                    <span className="self-center capitalize text-sm font-light pl-2">2011-2013</span>
                                </p>
                            </div>
                        </li>
                </ul>
                {/* ___________________ PERSONAL PROJECTS________________________ */}
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase pt-10"> <span  className="pr-2">{lightIcon}</span>PERSONAL PROJECTS</h2>
                <ul>
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Hashtag Haiku
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize">
                            <ul className="list-disc">
                                <li>Create Poetry out of Anyones Twitter timeline</li>
                                <li>
                                 Technologies used: Twitter Api, Twitter Gem, Numbersandwords Gem, Syllabize Gem
                                </li>

                            </ul>
                        </p>
                    </div>
                </li>
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Arduino 
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>
                                    Built and soldered Arduino Uno and with Adafruit LCD Shield (built in C)
                                </li>
                                <li>
                                    Scraped government census data of average life expectancy based on age/gender for display.
                                </li>                                
                            </ul>
                        </p>
                    </div>
                </li>                        
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Ironboard 
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>
                                A professional network for Flatiron students, staff, and alumni.
                                </li>
                                <li>
                                Technologies used: Linkedin Omniauth, Advanced search, nested resources, and forms. Peer validation system to ensure security of user information
                                </li>                            
                            </ul>
                        </p>
                    </div>
                </li>                                        
                </ul>
                {/* ___________________ TALKS________________________ */}
                <h2 className="flex text-xl text-zinc-50 font-bold mb-7 uppercase pt-10"> <span  className="pr-2">{lightIcon}</span>Talks</h2>
                <ul>
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch text-l text-zinc-50 font-normal">Flatiron Presents: Hashtag Haiku
                        </p>
                        
                    </div>
                </li>
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch text-l text-zinc-50 font-normal">Kickstarter Engineering Meeting Talk Title: Bringing Bitly Service In-House
                        </p>
                        
                    </div>
                </li>                        
                <li className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div>
                        <p className="flex items-stretch text-l text-zinc-50 font-normal">HTML5/Javascript Meetup: Client Side Storage
                        </p>
                        
                    </div>
                </li>                                        
                </ul>
            </div>            
        </section>
    );
}
