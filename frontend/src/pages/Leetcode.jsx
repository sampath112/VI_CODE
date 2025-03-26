


// import React from "react";
// import { motion } from "framer-motion";
// import { FaChevronRight } from "react-icons/fa";

// const problems = [
//     {
//         id: 1,
//         title: "Two Sum",
//         difficulty: "Easy",
//         tags: ["Array", "Hash Table"],
//         link: "https://leetcode.com/problems/two-sum/"
//     },
//     {
//         id: 2,
//         title: "Longest Substring Without Repeating Characters",
//         difficulty: "Medium",
//         tags: ["String", "Sliding Window"],
//         link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
//     },
//     {
//         id: 3,
//         title: "Merge Intervals",
//         difficulty: "Hard",
//         tags: ["Sorting", "Greedy"],
//         link: "https://leetcode.com/problems/merge-intervals/"
//     },
//     {
//         id: 4,
//         title: "Binary Tree Level Order Traversal",
//         difficulty: "Medium",
//         tags: ["Tree", "BFS"],
//         link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
//     },
//     {
//         id: 5,
//         title: "Reverse Linked List",
//         difficulty: "Easy",
//         tags: ["Linked List", "Recursion"],
//         link: "https://leetcode.com/problems/reverse-linked-list/"
//     },
//     {
//         id: 6,
//         title: "Valid Parentheses",
//         difficulty: "Easy",
//         tags: ["Stack", "String"],
//         link: "https://leetcode.com/problems/valid-parentheses/"
//     },
//     {
//         id: 7,
//         title: "Climbing Stairs",
//         difficulty: "Easy",
//         tags: ["Dynamic Programming"],
//         link: "https://leetcode.com/problems/climbing-stairs/"
//     },
//     {
//         id: 8,
//         title: "Container With Most Water",
//         difficulty: "Medium",
//         tags: ["Two Pointers", "Greedy"],
//         link: "https://leetcode.com/problems/container-with-most-water/"
//     },
//     {
//         id: 9,
//         title: "Coin Change",
//         difficulty: "Medium",
//         tags: ["Dynamic Programming"],
//         link: "https://leetcode.com/problems/coin-change/"
//     },
//     {
//         id: 10,
//         title: "Word Break",
//         difficulty: "Medium",
//         tags: ["Dynamic Programming", "Backtracking"],
//         link: "https://leetcode.com/problems/word-break/"
//     }
// ];

// export default function LeetcodeProblems() {
//     return (
//         <div className="min-h-screen bg-[#0f172a] text-white p-8">
            
//             {/* Header */}
//             <div className="text-center mb-10">
//                 <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text">
//                     🚀  Problem Statement
//                 </h1>
//                 <p className="text-gray-400 mt-4">
//                     Click on any problem to open it on <span className="text-blue-400">LeetCode</span>.
//                 </p>
//             </div>

//             {/* Problem Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {problems.map((problem) => (
//                     <motion.a
//                         key={problem.id}
//                         href={problem.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className={`block p-6 rounded-lg shadow-lg border transition ${
//                             problem.difficulty === "Easy" ? "border-green-500 hover:bg-green-600" :
//                             problem.difficulty === "Medium" ? "border-yellow-500 hover:bg-yellow-600" :
//                             "border-red-500 hover:bg-red-600"
//                         } bg-[#1E293B] hover:text-white cursor-pointer`}
//                     >
//                         <div className="flex justify-between items-center">
//                             <h2 className="text-2xl font-bold">{problem.title}</h2>
//                             <FaChevronRight className="text-gray-400" />
//                         </div>
//                         <div className="flex justify-between items-center mt-4">
//                             <span 
//                                 className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                                     problem.difficulty === "Easy" ? "bg-green-600" :
//                                     problem.difficulty === "Medium" ? "bg-yellow-600" :
//                                     "bg-red-600"
//                                 }`}
//                             >
//                                 {problem.difficulty}
//                             </span>
//                             <div className="flex space-x-2">
//                                 {problem.tags.map((tag, index) => (
//                                     <span key={index} className="text-gray-400 text-sm">
//                                         #{tag}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     </motion.a>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../components/Footer";

const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"], link: "https://leetcode.com/problems/two-sum/" },
    { id: 2, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["String", "Sliding Window"], link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { id: 3, title: "Merge Intervals", difficulty: "Hard", tags: ["Sorting", "Greedy"], link: "https://leetcode.com/problems/merge-intervals/" },
    { id: 4, title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"], link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { id: 5, title: "Reverse Linked List", difficulty: "Easy", tags: ["Linked List", "Recursion"], link: "https://leetcode.com/problems/reverse-linked-list/" },
    { id: 6, title: "Valid Parentheses", difficulty: "Easy", tags: ["Stack", "String"], link: "https://leetcode.com/problems/valid-parentheses/" },
    { id: 7, title: "Climbing Stairs", difficulty: "Easy", tags: ["Dynamic Programming"], link: "https://leetcode.com/problems/climbing-stairs/" },
    { id: 8, title: "Container With Most Water", difficulty: "Medium", tags: ["Two Pointers", "Greedy"], link: "https://leetcode.com/problems/container-with-most-water/" },
    { id: 9, title: "Coin Change", difficulty: "Medium", tags: ["Dynamic Programming"], link: "https://leetcode.com/problems/coin-change/" },
    { id: 10, title: "Word Break", difficulty: "Medium", tags: ["Dynamic Programming", "Backtracking"], link: "https://leetcode.com/problems/word-break/" }
];

export default function LeetcodeProblems() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e2e8f0] via-[#f0f4f8] to-[#cbd5e1] text-black font-['BIANKA']">

            {/* Header Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Black Gradient Title */}
                <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-transparent bg-clip-text">
                     Problem Statements
                </h1>
                
                <p className="text-center text-gray-600 mb-10">
                    Sharpen your coding skills by solving these popular Leetcode problems.
                </p>

                {/* Problem Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {problems.map((problem) => (
                        <motion.a
                            key={problem.id}
                            href={problem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-white shadow-md rounded-lg p-5 border border-gray-200 transition
                            hover:shadow-lg hover:border-blue-400 cursor-pointer flex items-center justify-between w-full h-32"
                        >
                            {/* Content Section */}
                            <div className="flex flex-col justify-between h-full">
                                <h2 className="text-xl font-bold">{problem.title}</h2>
                                <div className="flex items-center mt-2">
                                    <span 
                                        className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                                            problem.difficulty === "Easy" ? "bg-green-500" :
                                            problem.difficulty === "Medium" ? "bg-yellow-500" :
                                            "bg-red-500"
                                        }`}
                                    >
                                        {problem.difficulty}
                                    </span>
                                    <div className="flex space-x-2 ml-4">
                                        {problem.tags.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-lg shadow-sm"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Arrow Icon */}
                            <FaChevronRight className="text-gray-400 text-2xl ml-4" />
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}
