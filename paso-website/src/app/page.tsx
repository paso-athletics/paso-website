import { EB_Garamond, Rubik } from "next/font/google";
import { HOME_MAIN_TITLE, HOME_SUB_TITLE, BRIEF_INTRO_P1, BRIEF_INTRO_P2, SLOGAN, JOIN_US_HEADING, TYPES_OF_RUNS } from "../constants";
import Runtype from "./components/runtype";

const garamond = EB_Garamond({
    weight: '400',
    subsets: ['latin']
});

const rubik = Rubik({
    weight: '300',
    subsets: ['latin']
});

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="absolute top-0 bg-black opacity-50 w-full h-screen"></div>
        <img className='w-full h-screen object-cover object-[42%] md:object-center' src="/assets/landing.jpg" alt="Paso Run Club Group Photo"/>
        <div className={`absolute text-center m-auto left-0 right-0 bottom-10 ${garamond.className}`}>
          <h1 className="uppercase text-2xl">{`${HOME_MAIN_TITLE}`}</h1>
          <h2 className="uppercase">{`${HOME_SUB_TITLE}`}</h2>
        </div>
      </section>
      <section className={`bg-paso-light-black ${rubik.className}`}>
        <div className="text-justify md:text-center px-8 pt-14 pb-12">
          <p className="text-lg">{`${BRIEF_INTRO_P1}`}</p>
          <p className="text-lg mt-2">{`${BRIEF_INTRO_P2}`}</p>
        </div>
        <div className= "bg-paso-light-orange flex text-center text-transparent py-2 whitespace-nowrap overflow-hidden">
          {
            Array.from(Array(8)).map(() => <h1 className="marquee text-2xl tracking-wider mx-2">{`${SLOGAN}`}</h1>)
          }  
        </div>
      </section>
      <section className={`py-10 ${rubik.className}`}>
        <h1 className="text-center text-3xl capitalize mb-8">{`${JOIN_US_HEADING}`}</h1>
        {
          TYPES_OF_RUNS.map((run) => (
            <Runtype key={run.id} data={run}/>
          ))
        }
      </section>
    </>
  );
}
