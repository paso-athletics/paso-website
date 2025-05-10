import Socials from "./socials";
import { Rubik } from "next/font/google";
import { FOOTER_COPYRIGHT } from "../../constants";

const rubik = Rubik({
    weight: '300',
    subsets: ['latin']
});

export default function Footer() {
    return (
        <footer className={`${rubik.className} my-8`}>
            <Socials/>
            <p className='text-white text-center text-[9px] mt-4'>&copy;{`${FOOTER_COPYRIGHT}`}</p>
        </footer>
    );
}