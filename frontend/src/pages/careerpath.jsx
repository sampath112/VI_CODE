


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaCode, FaCloud, FaDatabase, FaBrain, FaBriefcase, FaClock, FaTools, FaChartLine, FaLightbulb } from "react-icons/fa";
// import Footer from "../components/Footer";

// const careerPaths = [
//     {
//         title: "Software Development",
//         icon: <FaCode className="text-blue-400 text-4xl" />,
//         specializations: [
//             {
//                 name: "Frontend Developer",
//                 jobRoles: ["React Developer", "Angular Developer", "UI/UX Engineer"],
//                 demand: "📈 High (2025)",
//                 competition: "⚔️ Moderate",
//                 skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
//                 tools: ["VS Code", "Figma", "Tailwind CSS", "React", "Webpack"],
//                 timeTaken: "⏳ 6-12 months",
//                 roadmap: "Learn HTML/CSS → JavaScript Basics → React/Angular → State Management → Build Projects → Portfolio"
//             },
//             {
//                 name: "Backend Developer",
//                 jobRoles: ["Node.js Developer", "Django Developer", "Spring Boot Engineer"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ High",
//                 skills: ["Node.js", "Django", "Java", "APIs", "SQL"],
//                 tools: ["Postman", "MongoDB", "MySQL", "Docker", "Git"],
//                 timeTaken: "⏳ 9-15 months",
//                 roadmap: "Learn Programming Basics → Server-side Language → Databases → API Development → Authentication → Deployment"
//             },
//             {
//                 name: "Full Stack Developer",
//                 jobRoles: ["MERN Stack Developer", "MEAN Stack Developer", "Java Full Stack Engineer"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ High",
//                 skills: ["JavaScript", "React", "Node.js", "MongoDB", "REST APIs"],
//                 tools: ["VS Code", "Postman", "Docker", "AWS", "Git"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Frontend Basics → Backend Basics → Database Integration → Full Stack Projects → Deployment"
//             },
//              {
//                 name: "Game Developer",
//                 jobRoles: ["Unity Developer", "Unreal Engine Developer", "Game Designer"],
//                 demand: "📈 Moderate",
//                 competition: "⚔️ High",
//                 skills: ["C#", "C++", "Unity", "3D Modeling", "Game Physics"],
//                 tools: ["Unity", "Unreal Engine", "Blender", "Photoshop", "Git"],
//                 timeTaken: "⏳ 12-24 months",
//                 roadmap: "Programming Basics → Game Engine → 2D Games → 3D Games → Multiplayer → Portfolio"
//             },
//                         {
//                 name: "DevOps Engineer",
//                 jobRoles: ["CI/CD Engineer", "Infrastructure Engineer", "Site Reliability Engineer"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ Moderate",
//                 skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "AWS"],
//                 tools: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Git"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Linux Basics → Scripting → Containers → CI/CD Pipelines → Cloud Platforms → Automation"
//             }
//         ],

//     },
//     {
//         title: "Data Science & Analytics",
//         icon: <FaDatabase className="text-green-400 text-4xl" />,
//         specializations: [
//             {
//                 name: "Data Analyst",
//                 jobRoles: ["Business Analyst", "Data Visualization Specialist", "Analytics Consultant"],
//                 demand: "📈 High",
//                 competition: "⚔️ Moderate",
//                 skills: ["SQL", "Excel", "Python", "Statistics", "Tableau"],
//                 tools: ["Power BI", "Tableau", "Excel", "SQL Server", "Google Analytics"],
//                 timeTaken: "⏳ 6-12 months",
//                 roadmap: "Excel Basics → SQL → Statistics → Visualization Tools → Real-world Analysis"
//             },
//             {
//                 name: "Data Scientist",
//                 jobRoles: ["Machine Learning Engineer", "AI Researcher", "NLP Engineer"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ High",
//                 skills: ["Python", "Statistics", "Pandas", "Machine Learning", "Deep Learning"],
//                 tools: ["TensorFlow", "PyTorch", "Jupyter Notebook", "SQL", "Scikit-learn"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Python → Statistics → Data Wrangling → Machine Learning → Advanced Projects"
//             },
//                         {
//                 name: "Data Engineer",
//                 jobRoles: ["ETL Developer", "Big Data Engineer", "Data Pipeline Engineer"],
//                 demand: "📈 High",
//                 competition: "⚔️ Moderate",
//                 skills: ["SQL", "Python", "Hadoop", "Spark", "ETL"],
//                 tools: ["Airflow", "Spark", "Hadoop", "AWS", "Kafka"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "SQL → Python → Big Data Tools → Data Pipelines → Cloud Integration"
//             },
//             {
//                 name: "Machine Learning Engineer",
//                 jobRoles: ["ML Model Developer", "AI Engineer", "Algorithm Engineer"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ High",
//                 skills: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Mathematics"],
//                 tools: ["Jupyter", "TensorFlow", "PyTorch", "AWS", "Git"],
//                 timeTaken: "⏳ 12-24 months",
//                 roadmap: "Math Basics → Python → ML Fundamentals → Deep Learning → Production Deployment"
//             }
//         ],
//     },
//         {
//         title: "Cloud Computing",
//         icon: <FaCloud className="text-blue-500 text-4xl" />,
//         specializations: [
//             {
//                 name: "Cloud Solutions Architect",
//                 jobRoles: ["AWS Architect", "Azure Architect", "GCP Architect"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ Moderate",
//                 skills: ["AWS", "Azure", "GCP", "Architecture Design", "Networking"],
//                 tools: ["AWS Console", "Azure Portal", "Terraform", "Docker", "Kubernetes"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Cloud Basics → AWS/Azure/GCP → Architecture Patterns → Security → Certification"
//             },
//             {
//                 name: "Cloud Engineer",
//                 jobRoles: ["Cloud Infrastructure Engineer", "Cloud Support Engineer", "Cloud Developer"],
//                 demand: "📈 High",
//                 competition: "⚔️ Moderate",
//                 skills: ["AWS", "Linux", "Scripting", "Monitoring", "CI/CD"],
//                 tools: ["AWS CLI", "CloudWatch", "Jenkins", "Docker", "Git"],
//                 timeTaken: "⏳ 9-15 months",
//                 roadmap: "Linux → Cloud Fundamentals → Automation → Monitoring → Deployment"
//             },
//             {
//                 name: "Cloud Security Engineer",
//                 jobRoles: ["Cloud Security Analyst", "IAM Specialist", "Compliance Engineer"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ High",
//                 skills: ["Security", "IAM", "Encryption", "AWS Security", "Compliance"],
//                 tools: ["AWS IAM", "Security Hub", "Splunk", "Firewall", "VPN"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Security Basics → Cloud Security → IAM → Monitoring → Certifications"
//             },
//             {
//                 name: "Cloud DevOps Engineer",
//                 jobRoles: ["Cloud Automation Engineer", "CI/CD Specialist", "SRE"],
//                 demand: "📈 High",
//                 competition: "⚔️ Moderate",
//                 skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS"],
//                 tools: ["Jenkins", "Kubernetes", "Terraform", "AWS", "Git"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "DevOps Basics → Containers → Cloud Platforms → Automation → Monitoring"
//             },
//             {
//                 name: "Cloud Network Engineer",
//                 jobRoles: ["Cloud Network Architect", "VPC Specialist", "Connectivity Engineer"],
//                 demand: "📈 Moderate",
//                 competition: "⚔️ Moderate",
//                 skills: ["Networking", "VPC", "VPN", "Load Balancing", "AWS"],
//                 tools: ["AWS VPC", "CloudFormation", "Wireshark", "Cisco", "Git"],
//                 timeTaken: "⏳ 9-15 months",
//                 roadmap: "Networking Basics → Cloud Networking → VPC Design → Security → Optimization"
//             }
//         ],
//     },
//         {
//         title: "Artificial Intelligence & Machine Learning",
//         icon: <FaBrain className="text-purple-400 text-4xl" />,
//         specializations: [
//             {
//                 name: "Machine Learning Engineer",
//                 jobRoles: ["ML Model Developer", "AI Engineer", "Data Scientist"],
//                 demand: "📈 Very High",
//                 competition: "⚔️ High",
//                 skills: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Mathematics"],
//                 tools: ["Jupyter", "TensorFlow", "PyTorch", "AWS", "Git"],
//                 timeTaken: "⏳ 12-24 months",
//                 roadmap: "Math → Python → ML Basics → Advanced ML → Deployment"
//             },
//             {
//                 name: "AI Research Scientist",
//                 jobRoles: ["AI Researcher", "Algorithm Developer", "PhD Researcher"],
//                 demand: "📈 Moderate",
//                 competition: "⚔️ Very High",
//                 skills: ["Python", "Mathematics", "Deep Learning", "Research", "Statistics"],
//                 tools: ["TensorFlow", "PyTorch", "Jupyter", "LaTeX", "Git"],
//                 timeTaken: "⏳ 24-36 months",
//                 roadmap: "Math → Programming → ML → Research Methods → Publish Papers"
//             },
//             {
//                 name: "Deep Learning Engineer",
//                 jobRoles: ["Neural Network Engineer", "DL Specialist", "AI Model Developer"],
//                 demand: "📈 High",
//                 competition: "⚔️ High",
//                 skills: ["Python", "TensorFlow", "PyTorch", "CNNs", "RNNs"],
//                 tools: ["TensorFlow", "PyTorch", "CUDA", "Jupyter", "AWS"],
//                 timeTaken: "⏳ 12-24 months",
//                 roadmap: "Python → ML Basics → Neural Networks → Deep Learning → Optimization"
//             },
//             {
//                 name: "Computer Vision Engineer",
//                 jobRoles: ["CV Developer", "Image Processing Engineer", "Vision AI Engineer"],
//                 demand: "📈 High",
//                 competition: "⚔️ High",
//                 skills: ["Python", "OpenCV", "Deep Learning", "Image Processing", "CNNs"],
//                 tools: ["OpenCV", "TensorFlow", "PyTorch", "MATLAB", "Git"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Python → Image Processing → OpenCV → Deep Learning → CV Projects"
//             },
//             {
//                 name: "NLP Engineer",
//                 jobRoles: ["NLP Developer", "Chatbot Engineer", "Text Mining Specialist"],
//                 demand: "📈 High",
//                 competition: "⚔️ High",
//                 skills: ["Python", "NLP", "Transformers", "Spacy", "Deep Learning"],
//                 tools: ["NLTK", "Spacy", "Hugging Face", "TensorFlow", "Git"],
//                 timeTaken: "⏳ 12-18 months",
//                 roadmap: "Python → Text Processing → NLP Basics → Transformers → NLP Projects"
//             }
//         ],
//     },

// ];

// export default function CareerPath() {
//     const [selectedPath, setSelectedPath] = useState(null);
//     const [selectedField, setSelectedField] = useState(null);

//     return (
//         <>
//         <div className="min-h-screen bg-[#0f172a] text-[#E5E7EB] flex flex-col">
            
//             {/* Gradient Heading */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text">
//                     🎯 Career Paths
//                 </h1>

//                 {/* Path Selection */}
//                 {!selectedPath ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                         {careerPaths.map((path, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="bg-[#1E293B]/80 backdrop-blur-lg text-[#E5E7EB] shadow-lg rounded-lg p-8 border border-gray-700
//                                 transition hover:scale-105 hover:shadow-2xl hover:border-[#4F46E5]/50 hover:bg-[#1E293B]/90 cursor-pointer"
//                                 whileHover={{ scale: 1.05 }}
//                                 onClick={() => setSelectedPath(path)}
//                             >
//                                 <div className="flex items-center space-x-4">
//                                     {path.icon}
//                                     <h2 className="text-2xl font-semibold">{path.title}</h2>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 ) : !selectedField ? (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="bg-[#1E293B]/80 p-10 rounded-lg shadow-lg border border-gray-700"
//                     >
//                         <button
//                             onClick={() => setSelectedPath(null)}
//                             className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-bold py-2 px-4 rounded-lg
//                             hover:from-[#3730A3] hover:to-[#7C3AED] transition mb-6"
//                         >
//                             🔙 Back
//                         </button>

//                         <h2 className="text-4xl font-bold flex items-center space-x-4">
//                             {selectedPath.icon}
//                             <span>{selectedPath.title}</span>
//                         </h2>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
//                             {selectedPath.specializations.map((field, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
//                                     whileHover={{ scale: 1.05 }}
//                                     onClick={() => setSelectedField(field)}
//                                 >
//                                     <h3 className="text-2xl font-semibold">{field.name}</h3>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 ) : (
//                     <motion.div 
//                         initial={{ opacity: 0 }} 
//                         animate={{ opacity: 1 }} 
//                         className="bg-[#1E293B]/80 p-10 rounded-lg shadow-lg border border-gray-700"
//                     >
//                         <button
//                             onClick={() => setSelectedField(null)}
//                             className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-bold py-2 px-4 rounded-lg
//                             hover:from-[#3730A3] hover:to-[#7C3AED] transition mb-6"
//                         >
//                             🔙 Back
//                         </button>

//                         <h2 className="text-4xl font-bold text-[#FACC15] mb-6">{selectedField.name}</h2>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                             {["jobRoles", "demand", "competition", "skills", "tools", "timeTaken", "roadmap"].map((key, index) => (
//                                 <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//                                     <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, " $1").trim()}</h3>
//                                     <p className="text-gray-400 mt-2">{Array.isArray(selectedField[key]) ? selectedField[key].join(", ") : selectedField[key]}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 )}
//             </div>
           
//         </div>
//          <Footer/>
//          </>
//     );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaDatabase, FaBrain } from "react-icons/fa";
import Footer from "../components/Footer";

const careerPaths = [
    {
        title: "Software Development",
        icon: <FaCode className="text-blue-400 text-4xl" />,
        specializations: [
            {
                name: "Frontend Developer",
                jobRoles: ["React Developer", "Angular Developer", "UI/UX Engineer"],
                demand: "📈 High (2025)",
                competition: "⚔️ Moderate",
                skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
                tools: ["VS Code", "Figma", "Tailwind CSS", "Webpack"],
                timeTaken: "⏳ 6-12 months",
                roadmap: "HTML/CSS → JavaScript → React → State Management → Portfolio"
            },
            {
                name: "Backend Developer",
                jobRoles: ["Node.js Developer", "Django Developer", "Spring Boot Engineer"],
                demand: "📈 Very High",
                competition: "⚔️ High",
                skills: ["Node.js", "Django", "Java", "APIs", "SQL"],
                tools: ["Postman", "MongoDB", "MySQL", "Docker", "Git"],
                timeTaken: "⏳ 9-15 months",
                roadmap: "Programming Basics → Server-side Language → Databases → API Dev → Deployment"
            },
            {
                name: "Full Stack Developer",
                jobRoles: ["MERN Stack Developer", "MEAN Stack Developer", "Java Full Stack Engineer"],
                demand: "📈 Very High",
                competition: "⚔️ High",
                skills: ["JavaScript", "React", "Node.js", "MongoDB", "REST APIs"],
                tools: ["VS Code", "Postman", "Docker", "AWS", "Git"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Frontend Basics → Backend Basics → Database Integration → Full Stack Projects → Deployment"
            },
                         {
                name: "Game Developer",
                jobRoles: ["Unity Developer", "Unreal Engine Developer", "Game Designer"],
                demand: "📈 Moderate",
                competition: "⚔️ High",
                skills: ["C#", "C++", "Unity", "3D Modeling", "Game Physics"],
                tools: ["Unity", "Unreal Engine", "Blender", "Photoshop", "Git"],
                timeTaken: "⏳ 12-24 months",
                roadmap: "Programming Basics → Game Engine → 2D Games → 3D Games → Multiplayer → Portfolio"
            },
                        {
                name: "DevOps Engineer",
                jobRoles: ["CI/CD Engineer", "Infrastructure Engineer", "Site Reliability Engineer"],
                demand: "📈 Very High",
                competition: "⚔️ Moderate",
                skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "AWS"],
                tools: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Git"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Linux Basics → Scripting → Containers → CI/CD Pipelines → Cloud Platforms → Automation"
            }
        ]
    },
    {
        title: "Data Science & Analytics",
        icon: <FaDatabase className="text-green-400 text-4xl" />,
        specializations: [
            {
                name: "Data Analyst",
                jobRoles: ["Business Analyst", "Data Visualization Specialist"],
                demand: "📈 High",
                competition: "⚔️ Moderate",
                skills: ["SQL", "Excel", "Python", "Statistics", "Tableau"],
                tools: ["Power BI", "Excel", "SQL Server"],
                timeTaken: "⏳ 6-12 months",
                roadmap: "Excel Basics → SQL → Visualization Tools → Real-world Analysis"
            },
            {
                name: "Data Scientist",
                jobRoles: ["ML Engineer", "AI Researcher"],
                demand: "📈 Very High",
                competition: "⚔️ High",
                skills: ["Python", "Statistics", "Pandas", "ML", "DL"],
                tools: ["TensorFlow", "Jupyter", "Scikit-learn"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Python → Statistics → Data Wrangling → ML → Advanced Projects"
            },
                                    {
                name: "Data Engineer",
                jobRoles: ["ETL Developer", "Big Data Engineer", "Data Pipeline Engineer"],
                demand: "📈 High",
                competition: "⚔️ Moderate",
                skills: ["SQL", "Python", "Hadoop", "Spark", "ETL"],
                tools: ["Airflow", "Spark", "Hadoop", "AWS", "Kafka"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "SQL → Python → Big Data Tools → Data Pipelines → Cloud Integration"
            },
            {
                name: "Machine Learning Engineer",
                jobRoles: ["ML Model Developer", "AI Engineer", "Algorithm Engineer"],
                demand: "📈 Very High",
                competition: "⚔️ High",
                skills: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Mathematics"],
                tools: ["Jupyter", "TensorFlow", "PyTorch", "AWS", "Git"],
                timeTaken: "⏳ 12-24 months",
                roadmap: "Math Basics → Python → ML Fundamentals → Deep Learning → Production Deployment"
            }
        ]
    },
    {
        title: "Cloud Computing",
        icon: <FaCloud className="text-blue-500 text-4xl" />,
        specializations: [
                        {
                name: "Cloud Solutions Architect",
                jobRoles: ["AWS Architect", "Azure Architect", "GCP Architect"],
                demand: "📈 Very High",
                competition: "⚔️ Moderate",
                skills: ["AWS", "Azure", "GCP", "Architecture Design", "Networking"],
                tools: ["AWS Console", "Azure Portal", "Terraform", "Docker", "Kubernetes"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Cloud Basics → AWS/Azure/GCP → Architecture Patterns → Security → Certification"
            },
            {
                name: "Cloud Engineer",
                jobRoles: ["Cloud Infrastructure Engineer", "Cloud Support Engineer", "Cloud Developer"],
                demand: "📈 High",
                competition: "⚔️ Moderate",
                skills: ["AWS", "Linux", "Scripting", "Monitoring", "CI/CD"],
                tools: ["AWS CLI", "CloudWatch", "Jenkins", "Docker", "Git"],
                timeTaken: "⏳ 9-15 months",
                roadmap: "Linux → Cloud Fundamentals → Automation → Monitoring → Deployment"
            },
            {
                name: "Cloud Security Engineer",
                jobRoles: ["Cloud Security Analyst", "IAM Specialist", "Compliance Engineer"],
                demand: "📈 Very High",
                competition: "⚔️ High",
                skills: ["Security", "IAM", "Encryption", "AWS Security", "Compliance"],
                tools: ["AWS IAM", "Security Hub", "Splunk", "Firewall", "VPN"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Security Basics → Cloud Security → IAM → Monitoring → Certifications"
            },
            {
                name: "Cloud DevOps Engineer",
                jobRoles: ["Cloud Automation Engineer", "CI/CD Specialist", "SRE"],
                demand: "📈 High",
                competition: "⚔️ Moderate",
                skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS"],
                tools: ["Jenkins", "Kubernetes", "Terraform", "AWS", "Git"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "DevOps Basics → Containers → Cloud Platforms → Automation → Monitoring"
            },
            {
                name: "Cloud Network Engineer",
                jobRoles: ["Cloud Network Architect", "VPC Specialist", "Connectivity Engineer"],
                demand: "📈 Moderate",
                competition: "⚔️ Moderate",
                skills: ["Networking", "VPC", "VPN", "Load Balancing", "AWS"],
                tools: ["AWS VPC", "CloudFormation", "Wireshark", "Cisco", "Git"],
                timeTaken: "⏳ 9-15 months",
                roadmap: "Networking Basics → Cloud Networking → VPC Design → Security → Optimization"
            }
        ]
    },
    {
        title: "Artificial Intelligence",
        icon: <FaBrain className="text-purple-400 text-4xl" />,
        specializations: [
            {
                name: "Machine Learning Engineer",
                jobRoles: ["ML Model Developer", "AI Engineer", "Data Scientist"],
                demand: "📈 Very High",
                competition: "⚔️ High",
                skills: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Mathematics"],
                tools: ["Jupyter", "TensorFlow", "PyTorch", "AWS", "Git"],
                timeTaken: "⏳ 12-24 months",
                roadmap: "Math → Python → ML Basics → Advanced ML → Deployment"
            },
            {
                name: "AI Research Scientist",
                jobRoles: ["AI Researcher", "Algorithm Developer", "PhD Researcher"],
                demand: "📈 Moderate",
                competition: "⚔️ Very High",
                skills: ["Python", "Mathematics", "Deep Learning", "Research", "Statistics"],
                tools: ["TensorFlow", "PyTorch", "Jupyter", "LaTeX", "Git"],
                timeTaken: "⏳ 24-36 months",
                roadmap: "Math → Programming → ML → Research Methods → Publish Papers"
            },
            {
                name: "Deep Learning Engineer",
                jobRoles: ["Neural Network Engineer", "DL Specialist", "AI Model Developer"],
                demand: "📈 High",
                competition: "⚔️ High",
                skills: ["Python", "TensorFlow", "PyTorch", "CNNs", "RNNs"],
                tools: ["TensorFlow", "PyTorch", "CUDA", "Jupyter", "AWS"],
                timeTaken: "⏳ 12-24 months",
                roadmap: "Python → ML Basics → Neural Networks → Deep Learning → Optimization"
            },
            {
                name: "Computer Vision Engineer",
                jobRoles: ["CV Developer", "Image Processing Engineer", "Vision AI Engineer"],
                demand: "📈 High",
                competition: "⚔️ High",
                skills: ["Python", "OpenCV", "Deep Learning", "Image Processing", "CNNs"],
                tools: ["OpenCV", "TensorFlow", "PyTorch", "MATLAB", "Git"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Python → Image Processing → OpenCV → Deep Learning → CV Projects"
            },
            {
                name: "NLP Engineer",
                jobRoles: ["NLP Developer", "Chatbot Engineer", "Text Mining Specialist"],
                demand: "📈 High",
                competition: "⚔️ High",
                skills: ["Python", "NLP", "Transformers", "Spacy", "Deep Learning"],
                tools: ["NLTK", "Spacy", "Hugging Face", "TensorFlow", "Git"],
                timeTaken: "⏳ 12-18 months",
                roadmap: "Python → Text Processing → NLP Basics → Transformers → NLP Projects"
            }
        ]
    }
];

export default function CareerPath() {
    const [selectedPath, setSelectedPath] = useState(null);
    const [selectedField, setSelectedField] = useState(null);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#e2e8f0] via-[#f0f4f8] to-[#cbd5e1] text-black font-['BIANKA']">

                {/* Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    {/* Black Gradient Title */}
                    <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-transparent bg-clip-text">
                        🎯 Career Paths
                    </h1>

                    {/* Path Selection */}
                    {!selectedPath ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {careerPaths.map((path, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition
                                    hover:shadow-lg hover:border-blue-400 cursor-pointer flex items-center justify-between w-full h-32"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setSelectedPath(path)}
                                >
                                    <div className="flex items-center space-x-4">
                                        {path.icon}
                                        <h2 className="text-2xl font-semibold">{path.title}</h2>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : !selectedField ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="bg-white p-10 rounded-lg shadow-lg border border-gray-300"
                        >
                            <button
                                onClick={() => setSelectedPath(null)}
                                className="bg-[#029193] text-white font-bold py-2 px-4 rounded-lg  transition mb-6"
                            >
                                🔙 Back
                            </button>

                            <h2 className="text-4xl font-bold mb-6">{selectedPath.title}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {selectedPath.specializations.map((field, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-100 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setSelectedField(field)}
                                    >
                                        <h3 className="text-2xl font-semibold">{field.name}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="bg-white shadow-lg rounded-lg border border-gray-200 p-10 max-w-5xl mx-auto"
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedField(null)}
                            className="bg-[#029193] text-white font-bold py-2 px-6 rounded-lg
                            hover:from-[#3730A3] hover:to-[#7C3AED] transition mb-6"
                        >
                            🔙 Back
                        </button>
            
                        {/* Title with Black Gradient */}
                        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-transparent bg-clip-text mb-10">
                            {selectedField.name}
                        </h2>
            
                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {["jobRoles", "demand", "competition", "skills", "tools", "timeTaken", "roadmap"].map((key, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition hover:shadow-lg hover:border-blue-400"
                                >
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {key.replace(/([A-Z])/g, " $1").trim()}
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        {Array.isArray(selectedField[key]) 
                                            ? selectedField[key].join(", ") 
                                            : selectedField[key]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
