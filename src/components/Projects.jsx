import React from "react";

const projects = [
    {
        title: "Ladakh-Lux",
        description:
            "A premium travel website offering curated packages and experiences across Ladakh.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        live: "https://codebysalmanshaikh.github.io/Ladakh-Luxe/",
        github: "https://github.com/codebysalmanshaikh/Ladakh-Luxe.git",
        // Optional: image or icon
    },
    {
        title: "Employee Task Tracker",
        description:
            "A role-based task management system built with React and Tailwind CSS. Admins assign tasks, employees track progress. Uses local storage for lightweight data persistence.",
        tech: ["React", "Tailwind CSS", "React Router DOM", "Vite"],
        live: "https://employee-task-tracker-eight.vercel.app/",
        github: "https://github.com/codebysalmanshaikh/employee-task-tracker.git",
        
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-gray-900 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                    My <span className="text-teal-400">Projects</span>
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="bg-gray-800 rounded-xl shadow-lg flex flex-col h-full p-6 transition-transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-teal-400 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-700 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-600 text-teal-300 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects; 