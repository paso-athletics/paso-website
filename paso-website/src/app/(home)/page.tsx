import { EB_Garamond } from "next/font/google";
import { HOME_MAIN_TITLE, HOME_SUB_TITLE } from "../../constants";

const garamond = EB_Garamond({
    weight: '400'
});

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="absolute top-0 bg-black opacity-50 w-full h-screen"></div>
        <img className='w-full h-screen object-cover object-center' src="/assets/landing.jpg" alt="Paso Run Club Group Photo"/>
        <div className={`absolute text-white text-center m-auto left-0 right-0 bottom-10 ${garamond.className}`}>
          <h1 className="uppercase text-2xl">{`${HOME_MAIN_TITLE}`}</h1>
          <h2 className="uppercase">{`${HOME_SUB_TITLE}`}</h2>
        </div>
      </section>
      <section>
        {/* <h1 className="text-white">more content to come...</h1> */}
      </section>
    </>
  );
}
