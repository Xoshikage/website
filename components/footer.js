import Image from 'next/image';

export default function footer() {
    return (
        <div className="">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                   <Image src='/Logo.png' alt="logo" width={100} height={100} />
                </aside>
                <nav>
                <header className="footer-title">Learn More</header> 
                    <a className="link link-hover hover:font-bold hover:underline-none">About SER</a>
                    <a className="link link-hover hover:font-bold hover:underline-none">SER Projects</a>
                    <a className="link link-hover hover:font-bold hover:underline-none">Calendar</a>
                    <a className="link link-hover hover:font-bold hover:underline-none">Contact</a>
                </nav> 
            </footer>
        </div>
    )
} 

