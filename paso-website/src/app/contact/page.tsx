import { Rubik } from "next/font/google";
import { CONTACT_HEADING, CONTACT_SUB_HEADING, CONTACT_ADDITIONAL } from "../../constants";

const rubik = Rubik({
    weight: '300',
    subsets: ['latin']
});

export default function Contact() {
    return (
        <>
            <section className={`py-40 ${rubik.className}`}>
                <h1 className="text-center text-3xl capitalize mb-6">{`${CONTACT_HEADING}`}</h1>
                <div className="px-4 md:px-16">
                    <h2 className="text-md tracking-widest md:text-xl">{`${CONTACT_SUB_HEADING}`}</h2>
                    <p className="text-justify md:text-start">{`${CONTACT_ADDITIONAL}`}</p>
                </div>

                <form action="">

                </form>

                {/* <form action="#" className="space-y-8">
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
                </div>
                <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                </form> */}
            </section>
        </>
    );
}
    