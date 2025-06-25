import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/animations/Animation -hero.json";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-4 pt-24 md:pt-32 pb-10"
        >
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-teal-300">
                    Hi, I'm <span className="text-teal-400">Salman</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
                    Frontend Web Developer <br className="hidden md:block" />
                    Crafting beautiful, responsive interfaces.
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold px-7 py-3 rounded-lg shadow-lg transition-colors duration-200"
                >
                    View My Work
                </a>
            </div>
            
            <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
                
                <Lottie animationData={heroAnimation} loop={true} className="w-56 md:w-72" />
                {/* <div className="w-48 h-48 md:w-72 md:h-72 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    Placeholder for Lottie animation 
                    <span className="text-6xl text-teal-400">⚡</span>
                </div> */}
            </div>
        </section>
    );
}
export default Hero; 