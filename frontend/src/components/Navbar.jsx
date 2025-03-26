import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.jpg'

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/");
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#029193] text-black shadow-md relative z-50 font-['BIANKA']">
            
            {/* Navbar Container */}
            <div className="container mx-auto flex justify-between items-center p-5">
                
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="ViCode Logo" className="w-10 h-10 rounded-full" />
                    <span className="text-3xl font-extrabold">ViCode</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-black hover:text-gray-700 transition"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link to="/" className="hover:text-gray-700 transition">Home</Link>
                    <Link to="/home" className="hover:text-gray-700 transition">Job Posts</Link>
                    <Link to="/roadmaps" className="hover:text-gray-700 transition">Roadmaps</Link>
                    <Link to="/careerpaths" className="hover:text-gray-700 transition">Career Paths</Link>
                    <Link to='/leetcode' className="hover:text-gray-700 transition">Problem Statements</Link>

                    {!token ? (
                        <button 
                            onClick={() => navigate("/admin")} 
                            className="bg-white text-[#029193] hover:bg-gray-200 px-4 py-2 rounded-lg transition shadow-md">
                            Admin Login
                        </button>
                    ) : (
                        <>
                            <Link to="/dashboard" className="hover:text-gray-700 transition">Dashboard</Link>
                            <button 
                                onClick={handleLogout} 
                                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white transition shadow-md">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/70 z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        {/* Sliding Menu */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 left-0 w-72 h-full bg-[#029193] shadow-lg z-30"
                        >
                            <div className="p-6">

                                {/* Close Button */}
                                <button
                                    onClick={toggleMenu}
                                    className="text-black hover:text-gray-700 transition mb-4"
                                >
                                    <FaTimes size={28} />
                                </button>

                                {/* Mobile Navigation Menu */}
                                <nav className="flex flex-col space-y-6">
                                    
                                    {/* All Navigation Links */}
                                    <Link 
                                        to="/" 
                                        className="hover:text-gray-700 transition"
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link 
                                        to="/home" 
                                        className="hover:text-gray-700 transition"
                                        onClick={toggleMenu}
                                    >
                                        Job Posts
                                    </Link>
                                    <Link 
                                        to="/roadmaps" 
                                        className="hover:text-gray-700 transition"
                                        onClick={toggleMenu}
                                    >
                                        Roadmaps
                                    </Link>
                                    <Link 
                                        to="/careerpaths" 
                                        className="hover:text-gray-700 transition"
                                        onClick={toggleMenu}
                                    >
                                        Career Paths
                                    </Link>
                                    <Link 
                                        to='/leetcode' 
                                        className="hover:text-gray-700 transition"
                                        onClick={toggleMenu}
                                    >
                                        Problem Statements
                                    </Link>

                                    {!token ? (
                                        <button 
                                            onClick={() => {
                                                navigate("/admin");
                                                toggleMenu();
                                            }} 
                                            className="bg-white text-[#029193] hover:bg-gray-200 px-4 py-2 rounded-lg transition shadow-md"
                                        >
                                            Admin Login
                                        </button>
                                    ) : (
                                        <>
                                            <Link 
                                                to="/dashboard" 
                                                className="hover:text-gray-700 transition"
                                                onClick={toggleMenu}
                                            >
                                                Dashboard
                                            </Link>
                                            <button 
                                                onClick={() => {
                                                    handleLogout();
                                                    toggleMenu();
                                                }} 
                                                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white transition shadow-md"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    )}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
