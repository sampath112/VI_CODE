// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPython, FaJava, FaCodeBranch, FaReact, FaDatabase, FaServer, FaCloud, FaRobot } from "react-icons/fa";
// import { SiCplusplus, SiMongodb, SiTensorflow, SiKubernetes, SiTableau } from "react-icons/si";
// import Footer from "../components/Footer";

// const roadmaps = [
//     {
//         title: "Python",
//         icon: <FaPython />,
//         description: "Learn Python from basics to advanced concepts, including frameworks and applications.",
//         steps: [
//             "Learn Python Syntax and Basics",
//             "Work with Data Structures & Algorithms",
//             "Practice Object-Oriented Programming (OOP)",
//             "Explore Web Development with Flask/Django",
//             "Understand Database Integration",
//             "Work with Automation and Scripting",
//             "Introduction to AI & Data Science with Python"
//         ]
//     },
//     {
//         title: "Java",
//         icon: <FaJava />,
//         description: "Master Java from core concepts to enterprise-level applications.",
//         steps: [
//             "Learn Java Basics & OOP",
//             "Understand Multithreading & Collections",
//             "Work with JDBC & Databases",
//             "Explore Spring Boot Framework",
//             "Develop REST APIs",
//             "Learn Java for Android (Optional)",
//             "Understand Microservices & Deployment"
//         ]
//     },
//     {
//         title: "C++",
//         icon: <SiCplusplus />,
//         description: "Master C++ for system programming, game development, and competitive coding.",
//         steps: [
//             "Learn C++ Basics & Syntax",
//             "Work with Pointers & Memory Management",
//             "Practice STL & Algorithms",
//             "Explore Object-Oriented Programming",
//             "Understand Competitive Programming Techniques",
//             "Learn Game Development with Unreal Engine (Optional)"
//         ]
//     },
//     {
//         title: "Frontend Development",
//         icon: <FaReact />,
//         description: "Learn to build interactive UI using modern frontend technologies.",
//         steps: [
//             "Master HTML, CSS, JavaScript",
//             "Learn React.js / Vue.js / Angular",
//             "Understand Responsive Design & CSS Frameworks",
//             "State Management (Redux, Context API)",
//             "Work with APIs & Backend Integration",
//             "Deploy Websites using Netlify/Vercel"
//         ]
//     },
//     {
//         title: "Backend Development",
//         icon: <FaServer />,
//         description: "Learn how to build and manage server-side applications.",
//         steps: [
//             "Master Node.js / Django / Spring Boot",
//             "Understand REST APIs & GraphQL",
//             "Database Management (SQL & NoSQL)",
//             "Authentication & Authorization",
//             "Build Scalable Backend Services",
//             "Deploy on Cloud (AWS, Heroku)"
//         ]
//     },
//     {
//         title: "Full Stack Development",
//         icon: <FaCodeBranch />,
//         description: "Become a complete web developer by mastering frontend & backend.",
//         steps: [
//             "Learn HTML, CSS, JavaScript, React.js",
//             "Master Node.js / Express.js / Django",
//             "Understand Databases (MongoDB, PostgreSQL)",
//             "Build & Consume REST APIs",
//             "Work with Authentication & Security",
//             "Deploy Full Stack Apps"
//         ]
//     },
//     {
//         title: "Data Science",
//         icon: <FaDatabase />,
//         description: "Learn to work with data, analyze patterns, and build predictive models.",
//         steps: [
//             "Learn Python & Libraries (NumPy, Pandas)",
//             "Understand Data Cleaning & Preprocessing",
//             "Explore Machine Learning with Scikit-Learn",
//             "Work with Deep Learning using TensorFlow/PyTorch",
//             "Deploy AI Models with Flask/FastAPI",
//             "Cloud Integration (AWS/GCP)"
//         ]
//     },
//     {
//         title: "Data Analyst",
//         icon: <SiTableau />,
//         description: "Analyze data and generate insights for business growth.",
//         steps: [
//             "Learn Excel & SQL",
//             "Work with Python for Data Analysis",
//             "Use Visualization Tools (Tableau, Power BI)",
//             "Understand Business Intelligence",
//             "Work with Big Data Tools (Hadoop, Spark)"
//         ]
//     },
//     {
//         title: "DevOps",
//         icon: <SiKubernetes />,
//         description: "Manage and deploy applications efficiently using DevOps practices.",
//         steps: [
//             "Understand Linux & Scripting",
//             "Work with Docker & Kubernetes",
//             "Automate CI/CD Pipelines (Jenkins, GitHub Actions)",
//             "Infrastructure as Code (Terraform, Ansible)",
//             "Monitor & Scale Applications",
//             "Cloud Deployments (AWS, Azure)"
//         ]
//     },
//     {
//         title: "AI/ML",
//         icon: <SiTensorflow />,
//         description: "Learn AI & ML to build smart applications.",
//         steps: [
//             "Learn Python & ML Libraries",
//             "Work with Supervised & Unsupervised Learning",
//             "Deep Learning with TensorFlow & PyTorch",
//             "Natural Language Processing (NLP)",
//             "Deploy AI Models & Cloud Integration",
//             "Work with Computer Vision"
//         ]
//     }
// ];

// export default function Roadmaps() {
//     const [selectedRoadmap, setSelectedRoadmap] = useState(null);

//     return (
//         <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#dce4e9] via-[#f0f4f8] to-[#e7ebf0] text-black font-['BIANKA']">
            
//             {/* Gradient Header */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <h1 className="text-5xl font-extrabold text-center mb-12">
//                     🚀 ViCode Career Roadmaps
//                 </h1>

//                 {selectedRoadmap ? (
//                     <div className="bg-white shadow-lg rounded-lg p-10 border border-gray-300 transition hover:scale-105 hover:shadow-2xl">
                        
//                         <button
//                             onClick={() => setSelectedRoadmap(null)}
//                             className="bg-[#029193] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#027b82] transition mb-6">
//                             🔙 Back
//                         </button>

//                         <h2 className="text-4xl font-bold flex items-center space-x-4">
//                             {selectedRoadmap.icon}
//                             <span>{selectedRoadmap.title}</span>
//                         </h2>

//                         <p className="text-gray-700 mt-4">{selectedRoadmap.description}</p>

//                         <ul className="mt-8 space-y-4">
//                             {selectedRoadmap.steps.map((step, index) => (
//                                 <li 
//                                     key={index}
//                                     className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
//                                     ⚡ {step}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                         {roadmaps.map((roadmap, index) => (
//                             <motion.div
//                                 key={index}
//                                 onClick={() => setSelectedRoadmap(roadmap)}
//                                 className="bg-white shadow-lg rounded-lg p-8 border border-gray-300
//                                 transition hover:scale-105 hover:shadow-2xl cursor-pointer"
//                                 whileHover={{ scale: 1.05 }}
//                             >
//                                 <div className="flex items-center space-x-4">
//                                     <span className="text-4xl">{roadmap.icon}</span>
//                                     <h2 className="text-2xl font-semibold">{roadmap.title}</h2>
//                                 </div>
//                                 <p className="text-gray-600 mt-4">{roadmap.description}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 )}
//             </div>
            
//             {/* <Footer /> */}
//         </div>
//     );
// }


import React, { useState } from "react";
import { FaPython, FaJava, FaCodeBranch, FaReact, FaDatabase, FaServer, FaCloud, FaRobot } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiTensorflow, SiKubernetes, SiTableau } from "react-icons/si";

// Importing roadmap images
import PythonRoadmap from "../assets/Python.jpg";
import JavaRoadmap from "../assets/java.jpg";
import CppRoadmap from "../assets/cpp.jpg";
import DsaRoadmap from "../assets/dsa.jpg";
import FrontendRoadmap from "../assets/frontend.jpg";
import BackendRoadmap from "../assets/backend.jpg";
import FullstackRoadmap from "../assets/fullstack.jpg";
import AiMlRoadmap from "../assets/aiml.jpg";
import DataScienceRoadmap from "../assets/ds.jpg";
import DataAnalystRoadmap from "../assets/da.jpg";
import DevopsRoadmap from "../assets/devops.jpg";

const roadmaps = [
    { title: "Python", icon: <FaPython />, description: "Learn Python from basics to advanced concepts.", image: PythonRoadmap },
    { title: "Java", icon: <FaJava />, description: "Master Java for enterprise applications.", image: JavaRoadmap },
    { title: "C++", icon: <SiCplusplus />, description: "Learn C++ for system programming and competitive coding.", image: CppRoadmap },
    { title: "DSA", icon: <FaCodeBranch />, description: "Master Data Structures and Algorithms.", image: DsaRoadmap },
    { title: "Frontend", icon: <FaReact />, description: "Build stunning UI with modern frontend tech.", image: FrontendRoadmap },
    { title: "Backend", icon: <FaServer />, description: "Learn backend development and APIs.", image: BackendRoadmap },
    { title: "Full Stack", icon: <FaCodeBranch />, description: "Master frontend & backend together.", image: FullstackRoadmap },
    { title: "AI/ML", icon: <SiTensorflow />, description: "Learn AI & ML to build smart applications.", image: AiMlRoadmap },
    { title: "Data Science", icon: <FaDatabase />, description: "Analyze data and build predictive models.", image: DataScienceRoadmap },
    { title: "Data Analyst", icon: <SiTableau />, description: "Become a data analyst with visualization skills.", image: DataAnalystRoadmap },
    { title: "DevOps", icon: <SiKubernetes />, description: "Learn DevOps practices and tools.", image: DevopsRoadmap }
];

export default function Roadmaps() {
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#dce4e9] via-[#f0f4f8] to-[#e7ebf0] text-black font-['BIANKA']">
            
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-5xl font-extrabold text-center mb-12">
                    🚀 Career Roadmaps
                </h1>

                {selectedRoadmap ? (
                    <div className="bg-white shadow-lg rounded-lg p-10 border border-gray-300">
                        
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedRoadmap(null)}
                            className="bg-[#029193] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#027b82] transition mb-6">
                            🔙 Back
                        </button>

                        {/* Roadmap Title */}
                        <h2 className="text-4xl font-bold flex items-center space-x-4">
                            {selectedRoadmap.icon}
                            <span>{selectedRoadmap.title}</span>
                        </h2>

                        <p className="text-gray-700 mt-4">{selectedRoadmap.description}</p>

                        {/* Display Image */}
                        <div className="mt-8">
                            <img 
                                src={selectedRoadmap.image} 
                                alt={`${selectedRoadmap.title} Roadmap`} 
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {roadmaps.map((roadmap, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedRoadmap(roadmap)}
                                className="bg-white shadow-lg rounded-lg p-8 border border-gray-300 cursor-pointer hover:shadow-2xl transition"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-4xl">{roadmap.icon}</span>
                                    <h2 className="text-2xl font-semibold">{roadmap.title}</h2>
                                </div>
                                <p className="text-gray-600 mt-4">{roadmap.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

