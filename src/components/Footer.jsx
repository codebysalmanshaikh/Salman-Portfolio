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
    
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gray-900 text-gray-400 px-4 pt-10 pb-6 mt-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                
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
                
                <div className="text-center text-sm text-gray-400 select-none">
                    &copy; {new Date().getFullYear()} Salman Shaikh. All rights reserved.
                </div>
                
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