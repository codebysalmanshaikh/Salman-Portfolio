import React from "react";
import profileImage from "../assets/photos/aboutphoto.jpeg";

const About = () => {
    return (
        <section id="about" className="bg-gray-900 py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                
                <div className="flex-shrink-0 mb-6 md:mb-0">
                    <img
                        src={profileImage}
                        alt="Salman"
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-4 border-teal-400"
                    />
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Hi! I’m <span className="text-teal-400 font-semibold">Salman</span>, a passionate frontend web developer with a love for creating beautiful, responsive, and user-friendly websites and applications.
                    </p>
                    <p className="text-lg text-gray-400 mb-4">
                        My expertise is in <span className="text-teal-300">JavaScript</span>, <span className="text-teal-300">React</span>, <span className="text-teal-300">Tailwind CSS</span>, and modern frontend technologies.  I focus on creating <span className="text-teal-200">SEO-optimized</span> websites that are built to rank and convert. Solving problems with clean, elegant code and improving user experience is what I enjoy most.
                    </p>
                    <p className="text-lg text-gray-400">
                        When I’m not coding, you’ll find me exploring new tech, working on side projects, or enjoying a good cup of coffee.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About