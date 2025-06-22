import React from "react";

const Education = () => {
    return (
        <section id="education" className="bg-gray-900 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                    Education
                </h2>
                <div className="space-y-8">
                    {/* BCA */}
                    <div className="bg-gray-800 rounded-xl shadow-lg p-7">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                                <h3 className="text-2xl font-semibold text-teal-400">Bachelor of Computer Applications (BCA)</h3>
                                <p className="text-gray-300 mt-1 mb-2">
                                    Shri Shivaji College, Parbhani <span className="text-gray-500">| SRTMUN University</span>
                                </p>
                                <p className="text-gray-400 mb-2">2022 – 2025</p>
                                <ul className="list-disc list-inside text-gray-300 text-base space-y-1">
                                    <li>
                                        <span className="font-semibold text-teal-300">Academic Project:</span> Team lead and frontend developer for <span className="font-semibold text-teal-200">The GradeBook Hub</span> – a student result portal built with three teammates.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-teal-300">Major Subjects:</span> Computer Science, Web Development, Data Structures, DBMS, and more.
                                    </li>
                                </ul>
                            </div>
                            {/* GPA Progress Bar */}
                            <div className="w-full md:w-72 mt-6 md:mt-0 flex flex-col items-center">
                                <span className="mb-1 text-sm font-medium text-teal-300">GPA: <span className="text-lg font-bold text-white">8.28</span> <span className="ml-2 bg-teal-400 text-gray-900 font-semibold px-3 py-1 rounded-full text-xs">A+</span></span>
                                <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
                                    <div
                                        className="bg-teal-400 h-4 rounded-full transition-all duration-700"
                                        style={{ width: `${(8.28 / 10) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 12th */}
                    <div className="bg-gray-800 rounded-xl shadow-lg p-7">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                                <h3 className="text-2xl font-semibold text-teal-400">12th (Computer Science)</h3>
                                <p className="text-gray-300 mt-1 mb-2">
                                    DSM College, Parbhani
                                </p>
                                <p className="text-gray-400">Completed: 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Education;