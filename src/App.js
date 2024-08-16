import './App.css';
import Header from './components/Header.tsx'
import Timeline from './components/Timeline.tsx'
import Socials from './components/Socials.tsx'

export const lightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>  
);

export const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
);
function App() {
  return (
    <main className="bg-gradient-to-r from-zinc-900 to-zinc-800 min-h-screen pt-30 pb-15">
      <Header/>
      <Socials/>
      <div className="font-mono flex flex-col items-center justify-center text-zinc-50 p-10 pb-20">
        <p className=" cursor-pointer hover:scale-125 transition ease-in-out max-w-2xl">
          Software Engineer currently based in NYC, experience working with React, NodeJS, Tailwind, Next.js
          Software Engineer currently based in NYC, experience working with React, NodeJS, Tailwind, Next.js
          Software Engineer currently based in NYC, experience working with React, NodeJS, Tailwind, Next.js
        </p>
        <button className="pt-20 animate-bounce w-8 h-8">
          {arrowIcon}
        </button>
        <Timeline/>
      </div>
    </main>
  );
}

export default App;
