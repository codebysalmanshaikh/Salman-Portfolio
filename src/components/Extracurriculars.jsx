import React from "react";

const Extracurriculars = () => {
    return (
        <section id="extracurriculars" className="bg-gray-950 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                    Extracurriculars
                </h2>
                <ul className="space-y-7">
                    <li className="bg-gray-800 rounded-xl shadow-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <span className="font-semibold text-teal-400">Smart India Hackathon (SIH)</span>
                                <span className="ml-3 text-gray-400 text-sm">September 2024</span>
                                <p className="mt-2 text-gray-300">
                                    Participated as <span className="font-semibold text-teal-300">team lead</span> with five teammates in the national-level SIH. Although not selected in the final round, gained valuable experience in collaborative problem-solving and rapid project development.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="bg-gray-800 rounded-xl shadow-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <span className="font-semibold text-teal-400">Techfest, IIT Bombay – Codecode Competition</span>
                                <span className="ml-3 text-gray-400 text-sm">October 2024</span>
                                <p className="mt-2 text-gray-300">
                                    Competed in the Codecode coding competition at IIT Bombay’s renowned Techfest, collaborating with cross-college friends and expanding technical and teamwork skills in a high-energy coding environment.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Extracurriculars;