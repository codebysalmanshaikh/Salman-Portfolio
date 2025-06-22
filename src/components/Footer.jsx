// import React from "react";

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
//             <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
//                 <div className="text-center md:text-left text-sm">
//                     &copy; {new Date().getFullYear()} Salman Shaikh. All rights reserved.
//                 </div>
//                 <div className="flex gap-5 justify-center">
//                     <a
//                         href="https://github.com/codebysalmanshaikh"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-teal-400 transition-colors"
//                         aria-label="GitHub"
//                     >
//                         <svg height="22" width="22" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12,2C6.48,2,2,6.58,2,12.26c0,4.5,2.87,8.32,6.84,9.67
//                 c0.5,0.1,0.68-0.22,0.68-0.48c0-0.24-0.01-1.02-0.01-1.86c-2.78,0.62-3.37-1.36-3.37-1.36c-0.45-1.17-1.11-1.48-1.11-1.48
//                 c-0.91-0.64,0.07-0.63,0.07-0.63c1.01,0.07,1.54,1.06,1.54,1.06c0.89,1.56,2.34,1.11,2.91,0.85c0.09-0.65,0.35-1.11,0.63-1.37
//                 c-2.22-0.26-4.56-1.13-4.56-5c0-1.1,0.38-2,1.01-2.71c-0.1-0.25-0.44-1.28,0.1-2.67c0,0,0.84-0.28,2.75,1.02
//                 c0.8-0.23,1.65-0.34,2.5-0.34s1.7,0.12,2.5,0.34c1.91-1.3,2.75-1.02,2.75-1.02c0.54,1.39,0.2,2.42,0.1,2.67
//                 c0.63,0.71,1.01,1.61,1.01,2.71c0,3.88-2.34,4.73-4.57,4.98c0.36,0.32,0.68,0.95,0.68,1.91c0,1.38-0.01,2.5-0.01,2.84
//                 c0,0.26,0.18,0.58,0.69,0.48C19.13,20.58,22,16.76,22,12.26C22,6.58,17.52,2,12,2z"/>
//                         </svg>
//                     </a>
//                     <a
//                         href="mailto:codesalman786@gmail.com"
//                         className="hover:text-teal-400 transition-colors"
//                         aria-label="Email"
//                     >
//                         <svg height="22" width="22" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z" />
//                         </svg>
//                     </a>
//                 </div>
//                 <div className="text-center md:text-right text-xs">
//                     Designed & built with <span className="text-teal-400">React & Tailwind CSS</span>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer; 


import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
    {
        href: "https://github.com/codebysalmanshaikh",
        label: "GitHub",
        icon: <FaGithub />,
    },
    {
        href: "https://www.linkedin.com/in/salman-shaikh-580283269/",
        label: "LinkedIn",
        icon: <FaLinkedin />,
    },
    {
        href: "mailto:salmans3724@gmail.com",
        label: "Gmail",
        icon: <FaEnvelope />,
    },
];

const Footer = () => {
    // Smooth scroll to top
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gray-900 text-gray-400 px-4 pt-10 pb-6 mt-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                {/* Social Icons */}
                <div className="flex justify-center gap-7 mb-2">
                    {socials.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="rounded-full p-2 text-2xl bg-gray-800 hover:bg-teal-500 hover:text-white transition-colors duration-200 shadow-sm"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                {/* Copyright */}
                <div className="text-center text-sm text-gray-400 select-none">
                    &copy; {new Date().getFullYear()} Salman Shaikh. All rights reserved.
                </div>
                {/* Back To Top Button */}
                <button
                    onClick={handleBackToTop}
                    className="group absolute right-4 bottom-6 md:static md:mt-1 flex items-center justify-center mx-auto md:mx-0 bg-teal-500 text-white rounded-full shadow-lg p-2 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all"
                    aria-label="Back to top"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                    <span className="sr-only">Back to top</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;