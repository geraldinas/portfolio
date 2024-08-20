import './App.css';
import Header from './components/Header.tsx'
import Timeline from './components/Timeline.tsx'

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
    <main className="bg-gradient-to-r from-zinc-900 to-zinc-800 min-h-screen pt-30 pb-15 scroll-smooth h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth transision-all ">
      <Header arrowIcon={arrowIcon}/>

      <div className="font-mono flex justify-center text-zinc-50 p-10 pb-20 min-h-screen snap-start">
        <Timeline/>
      </div>
    </main>
  );
}

export default App;
