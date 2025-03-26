import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "./LandingPage.css";  // Added external CSS for Bianka font

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#029193] text-[#36454F] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 font-['BIANKA']">
            
            {/* Animated Header */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
            >
                Welcome to <span className="text-[#36454F]">ViCode</span>
            </motion.h1>

            {/* Separated Slogan */}
            <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="text-lg sm:text-xl mt-6 max-w-3xl text-center leading-relaxed"
            >
                <strong className="block">Visualizing Code, Virtually Innovating.</strong>  
                Learn <strong>Full Stack Development, AI/ML, and Cloud</strong> with hands-on projects.
            </motion.p>

            {/* Icon Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
                
                {/* Full Stack */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center bg-white text-[#36454F] p-6 md:p-8 rounded-lg shadow-lg border border-gray-300 transition hover:shadow-2xl"
                >
                    <FaCode className="text-5xl sm:text-6xl text-[#029193]" />
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">Full Stack Development</h3>
                    <p className="text-sm mt-2 text-center">Learn MERN, Django, and more.</p>
                </motion.div>

                {/* AI/ML */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center bg-white text-[#36454F] p-6 md:p-8 rounded-lg shadow-lg border border-gray-300 transition hover:shadow-2xl"
                >
                    <FaRocket className="text-5xl sm:text-6xl text-[#029193]" />
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">AI & Machine Learning</h3>
                    <p className="text-sm mt-2 text-center">Master AI with real-world projects.</p>
                </motion.div>

                {/* DevOps */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center bg-white text-[#36454F] p-6 md:p-8 rounded-lg shadow-lg border border-gray-300 transition hover:shadow-2xl"
                >
                    <FaLaptopCode className="text-5xl sm:text-6xl text-[#029193]" />
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">DevOps & Cloud</h3>
                    <p className="text-sm mt-2 text-center">Deploy with AWS, Docker & Kubernetes.</p>
                </motion.div>
            </div>

            {/* Get Started Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-[#024F4D] text-white px-6 sm:px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition hover:bg-[#026866]"
                onClick={() => navigate("/home")} 
            >
                 Let's Get Started
            </motion.button>

        </div>
    );
}
