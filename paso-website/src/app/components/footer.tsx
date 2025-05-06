import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='my-8'>
            <div className='flex justify-center'>
                <a className='mx-2' href='https://www.instagram.com/pasorunclub/' target='_blank'>
                    <svg className='h-4 w-4 hover:scale-[1.2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.76 22.76">
                        <path fill="white" d="M22.68 16.07a6.78 6.78 0 01-1.84 4.77 6.76 6.76 0 01-4.76 1.84c-1.88.1-7.51.1-9.39 0a6.77 6.77 0 01-4.77-1.84 6.74 6.74 0 01-1.84-4.77C0 14.19 0 8.56.08 6.68a6.74 6.74 0 011.84-4.77A6.78 6.78 0 016.69.08C8.57 0 14.2 0 16.08.08a6.76 6.76 0 014.76 1.84 6.68 6.68 0 011.84 4.77c.11 1.88.11 7.5 0 9.38zm-2-4.69c0-1.66.14-5.21-.45-6.71a3.84 3.84 0 00-2.17-2.16c-1.49-.59-5.05-.46-6.71-.46s-5.21-.14-6.7.46a3.84 3.84 0 00-2.14 2.16c-.59 1.49-.45 5.05-.45 6.71s-.14 5.21.45 6.71a3.84 3.84 0 002.17 2.16c1.49.59 5.05.46 6.7.46s5.21.13 6.71-.46a3.87 3.87 0 002.17-2.16c.59-1.5.45-5.09.45-6.71zm-3.49 0a5.84 5.84 0 11-5.84-5.84 5.83 5.83 0 015.87 5.84zm-2 0a3.8 3.8 0 10-3.8 3.79 3.8 3.8 0 003.79-3.79zm2.28-4.71a1.37 1.37 0 111.36-1.36 1.36 1.36 0 01-1.37 1.36z"></path>
                    </svg>
                </a>
                <a className='mx-2' href='https://www.tiktok.com/@pasorunclub' target='_blank'>
                    <svg className='h-4 w-4 hover:scale-[1.2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.9 16">
                        <path fill="white" d="M7.3,0H9.91a4.16,4.16,0,0,0,1.16,2.78A4.69,4.69,0,0,0,13.9,4V6.66A7,7,0,0,1,11.1,6,7.73,7.73,0,0,1,10,5.39c0,2,0,3.9,0,5.84a5.12,5.12,0,0,1-.9,2.62A5,5,0,0,1,5.17,16a4.78,4.78,0,0,1-2.72-.68A5,5,0,0,1,0,11.5c0-.33,0-.67,0-1A5,5,0,0,1,5.83,6.05c0,1,0,2,0,3a2.34,2.34,0,0,0-2,.25,2.31,2.31,0,0,0-.91,1.17,2.57,2.57,0,0,0-.09,1.07,2.27,2.27,0,0,0,2.33,1.91A2.23,2.23,0,0,0,7,12.34a1.67,1.67,0,0,0,.27-.71c.07-1.19,0-2.38,0-3.57C7.29,5.37,7.28,2.69,7.3,0Z"></path>
                    </svg>
                </a>
                <a className='mx-2' href='https://strava.app.link/qu26Nbzv8Sb' target='_blank'>
                    <Image className='h-4 w-4 hover:scale-[1.2]' src="/assets/strava-icon.png" width={25} height={0} alt="strava"/>
                </a>
            </div>
            <p className='text-white text-center text-[9px] mt-4'>&copy;2025 Paso Run Club </p>
        </footer>
    );
}