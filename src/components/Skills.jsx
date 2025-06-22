import React from "react";
import {
    FaReact,
    FaGithub,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiRedux,
} from "react-icons/si";

import Lottie from "lottie-react";
import skillsAnimation from "../assets/animations/Animation -skills.json";

// const skills = [
//     { name: "React", color: "text-cyan-400", icon: "⚛️" },
//     { name: "Tailwind CSS", color: "text-teal-400", icon: "🌊" },
//     { name: "JavaScript", color: "text-yellow-400", icon: "🟨" },
//     { name: "TypeScript", color: "text-blue-400", icon: "🟦" },
//     { name: "HTML5", color: "text-orange-400", icon: "🟧" },
//     { name: "CSS3", color: "text-blue-300", icon: "🟦" },
//     { name: "Git", color: "text-red-400", icon: "🔧" },
//     { name: "Redux", color: "text-purple-400", icon: "🟪" },
//     // Add more as needed
// ];

const skills = [
  { name: "React", color: "text-cyan-400", icon: <FaReact /> },
  { name: "Tailwind CSS", color: "text-teal-400", icon: <SiTailwindcss /> },
  { name: "JavaScript", color: "text-yellow-400", icon: <SiJavascript /> },
  { name: "HTML5", color: "text-orange-400", icon: <SiHtml5 /> },
  { name: "CSS3", color: "text-blue-300", icon: <SiCss3 /> },
  { name: "Git", color: "text-red-400", icon: <FaGitAlt /> },
  { name: "GitHub", color: "text-white", icon: <FaGithub /> },
  { name: "Redux", color: "text-purple-400", icon: <SiRedux /> },
];


const Skills = () => {
    return (
        <section id="skills" className="bg-gray-950 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    My <span className="text-teal-400">Skills</span>
                </h2>
                {/* Optional Lottie Animation */}
                <div className="flex justify-center mb-8">
                    <Lottie animationData={skillsAnimation} loop={true} className="w-40 h-40" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg py-6 hover:scale-105 transition-transform duration-200"
                        >
                            <span className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</span>
                            <span className="text-lg font-semibold text-white">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills; 