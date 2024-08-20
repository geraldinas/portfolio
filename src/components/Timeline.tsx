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
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">01-04-2023-Present</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                                <ul className="list-disc">
                                    <li>
                                    Added new features and fixed bugs to enhance the Sinclair Company’s site.
                                    </li>
                                    <li>
                                    Assisted in building and customizing the site using WordPress.  
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
                            <p className="flex items-stretch text-base lg:text-xl text-zinc-50 font-bold">Software Engineer: Vice Media
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">15-11-2015 - 03-04-2023</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                    <li>Developed large-scale web applications across multiple platforms.</li>
                                    <li>Built a Ruby-based importer to integrate Vice content with Apple News.</li>
                                    <li>Maintained and refactored the Vice Video Player.</li>
                                    <li>Created Style Guide and UI components using Vue.js and JavaScript.</li>
                                    <li>Transitioned legacy PHP code to a React app using modern JavaScript frameworks.</li>
                                    <li>Increased unit test coverage using Chai, enhancing code reliability.</li>
                                    <li>Authored documentation for processes like onboarding and video player integration.</li>
                                    <li>Architected client-side solutions for responsive web applications.</li>
                                    <li>Unified React/Express front end for 15 VICE verticals, refactoring CMS and user-facing sites.</li>
                                    <li>Automated translation workflows with scripts, reducing manual spreadsheet work.</li>
                                    <li>Improved accessibility in user-facing applications.</li>
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
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline"> 01-06-2015 - 10-04-2015</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>Improved analytics by integrating Bitly Gem/Sequel Pro for tracking user activity.</li>
                                <li>Enhanced application accessibility for broader user engagement.</li>
                                <li>Developed an in-house link shortener for shared content URLs.</li>
                                <li>Resolved bugs in the checkout system of Kickstarter's user-facing application.</li>
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
                            <p className="flex items-stretch text-base lg:text-xl  text-zinc-50 font-bold">Lab Tech: Medical University of South Carolina
                            <span className="self-center capitalize text-sm font-light pl-2  hidden md:inline">01-01-2012 - 10-01-2012</span>
                            </p>
                            <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                                <ul className="list-disc">
                                    <li>Contributed to research on prolonging allograft survival in heart transplant patients.</li>
                                    <li>Published work as part of a cardiovascular immunology research team.</li>
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
                                <span className="self-center capitalize text-sm font-light pl-2 hidden md:inline">01-01-2012 - 10-01-2013
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
                                Collaborated with NYC Mayor and tech industry leaders to develop strategies for increasing diversity in the tech sector and integrating computer science education into public schools.
                                </li>
                                <li>
                                Represented the city's tech initiatives by presenting at NYC talent pipeline events and leading educational workshops aimed at bridging the digital divide.
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
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Railsbridge Instructor
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>
                                Provided free, accessible training in Ruby on Rails, HTML, and CSS to underrepresented groups through Railsbridge, fostering diversity and inclusion in tech.
                                </li>
                                <li>
                                Facilitated workshops and networking opportunities to empower participants with essential programming skills.
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
                        <p className="flex items-stretch md:text-xl text-zinc-50 font-bold">Volunteer Instructor: Women Who Code
                        </p>
                        <p className="brightness-50 hover:brightness-200 text-zinc-50 text-sm capitalize max-w-2xl">
                            <ul className="list-disc">
                                <li>
                                Delivered programming instruction and mentorship at Women Who Code events and hackathons, helping participants develop coding skills and confidence in a supportive environment.
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
