// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";

// export default function Dashboard() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [location, setLocation] = useState("");
//     const [company, setCompany] = useState("");
//     const [jobType, setJobType] = useState("Full-time");
//     const [salary, setSalary] = useState("");
//     const [experience, setExperience] = useState("");
//     const [applicationLink, setApplicationLink] = useState("");
//     const [contactEmail, setContactEmail] = useState("");
//     const [skills, setSkills] = useState("");
//     const [deadline, setDeadline] = useState("");
//     const [requirements, setRequirements] = useState("");
//     const [jobs, setJobs] = useState([]);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchJobs();
//         const token = localStorage.getItem("adminToken");
//         if (token) setIsAdmin(true);
//     }, []);

//     const fetchJobs = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch("https://next-code-academy-1.onrender.com/api/jobs");
//             const data = await res.json();

//             const filteredJobs = data
//                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//             setJobs(filteredJobs);
//         } catch (error) {
//             console.error("Error fetching jobs:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePostJob = async () => {
//         const token = localStorage.getItem("adminToken");

//         if (!token) {
//             alert("Unauthorized! Please log in.");
//             navigate("/admin");
//             return;
//         }

//         const payload = {
//             title,
//             description,
//             location,
//             company,
//             jobType,
//             salary,
//             deadline,
//             requirements,
//             experience,
//             applicationLink,
//             contactEmail,
//             skills
//         };

//         try {
//             const res = await fetch("https://next-code-academy-1.onrender.com/api/jobs", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (!res.ok) {
//                 const errData = await res.json();
//                 alert(`❌ Failed to post job: ${errData.error}`);
//                 return;
//             }

//             alert("✅ Job posted successfully!");
//             fetchJobs();

//             // Clear form fields
//             setTitle("");
//             setDescription("");
//             setLocation("");
//             setCompany("");
//             setJobType("Full-time");
//             setSalary("");
//             setExperience("");
//             setApplicationLink("");
//             setContactEmail("");
//             setSkills("");
//             setDeadline("");
//             setRequirements("");

//         } catch (error) {
//             console.error("Error posting job:", error);
//             alert("❌ Error posting job. Check console.");
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col bg-[#0f172a] text-[#E5E7EB]">
            
//             {/* Heading */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text">
//                     🚀 Admin Dashboard
//                 </h1>

//                 {/* Admin Form for Posting Jobs */}
//                 {isAdmin && (
//                     <div className="bg-[#1E293B]/80 backdrop-blur-lg text-[#E5E7EB] shadow-lg rounded-lg p-10 border border-gray-700 
//                         transition hover:scale-105 hover:shadow-2xl hover:border-[#4F46E5]/50">
                        
//                         <h2 className="text-4xl font-bold text-[#FACC15] mb-8">📌 Post a New Job</h2>

//                         <form 
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 handlePostJob();
//                             }}
//                             className="grid gap-6"
//                         >
//                             {/* Fields Grid */}
//                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                
//                                 {/* Required Fields */}
//                                 <input 
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Title" value={title}
//                                     onChange={(e) => setTitle(e.target.value)} required
//                                 />
//                                 <textarea
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Description "
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     rows="4" required
//                                 />
//                                 <input 
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Location (Required)" value={location}
//                                     onChange={(e) => setLocation(e.target.value)} required
//                                 />
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Company (Required)" value={company}
//                                     onChange={(e) => setCompany(e.target.value)} required
//                                 />
//                                 <select
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     value={jobType}
//                                     onChange={(e) => setJobType(e.target.value)} required
//                                 >
//                                     <option value="Full-time">Full-time</option>
//                                     <option value="Part-time">Part-time</option>
//                                     <option value="Contract">Contract</option>
//                                 </select>
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Salary (Required)" value={salary}
//                                     onChange={(e) => setSalary(e.target.value)} required
//                                 />
//                                 <input
//                                     type="datetime-local"
//                                     className="p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     value={deadline}
//                                     onChange={(e) => setDeadline(e.target.value)} required
//                                 />
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Requirements (Required)" value={requirements}
//                                     onChange={(e) => setRequirements(e.target.value)} required
//                                 />
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Experience " value={experience}
//                                     onChange={(e) => setExperience(e.target.value)} required
//                                 />
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Application Link " value={applicationLink}
//                                     onChange={(e) => setApplicationLink(e.target.value)} required
//                                 />
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Contact Email " value={contactEmail}
//                                     onChange={(e) => setContactEmail(e.target.value)} required
//                                 />
//                                 <input
//                                     className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4F46E5] w-full"
//                                     placeholder="Skills (Required)" value={skills}
//                                     onChange={(e) => setSkills(e.target.value)} required
//                                 />
//                             </div>

//                             <button 
//                                 type="submit" 
//                                 className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-bold py-3 rounded-lg w-full">
//                                 🚀 Post Job
//                             </button>
//                         </form>
//                     </div>
//                 )}
//                  <div className="mt-16">
//                     <h2 className="text-4xl font-bold text-[#FACC15] mb-8">📌 Job Listings</h2>

//                     {loading ? (
//                         <div className="text-center">
//                             <p className="text-lg text-blue-500">Loading jobs...</p>
//                         </div>
//                     ) : (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                             {jobs.map((job) => (
//                                 <div 
//                                     key={job._id}
//                                     className="bg-[#1E293B] text-[#E5E7EB] shadow-lg rounded-lg p-6 border border-gray-700 
//                                     hover:shadow-2xl hover:border-[#4F46E5]/50 transition hover:scale-105"
//                                 >
//                                     <h3 className="text-2xl font-bold">{job.title}</h3>
//                                     <p className="text-sm">{job.company} - {job.location}</p>
//                                     <p>{job.description}</p>
//                                     <p>💰 <strong>Salary:</strong> {job.salary}</p>
//                                     <p>🎯 <strong>Skills:</strong> {job.skills}</p>
//                                     <p>📅 <strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
//                                     <p>📧 <strong>Contact:</strong> {job.contactEmail}</p>
//                                     <p>🔗 <a href={job.applicationLink} target="_blank" className="text-blue-400 underline">Apply Here</a></p>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//             </div>

//             {/* <Footer /> */}
//         </div>
//     );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Dashboard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("");
    const [jobType, setJobType] = useState("Full-time");
    const [salary, setSalary] = useState("");
    const [experience, setExperience] = useState("");
    const [applicationLink, setApplicationLink] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [skills, setSkills] = useState("");
    const [deadline, setDeadline] = useState("");
    const [requirements, setRequirements] = useState("");
    const [jobs, setJobs] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobs();
        const token = localStorage.getItem("adminToken");
        if (token) setIsAdmin(true);
    }, []);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://next-code-academy-1.onrender.com/api/jobs");
            const data = await res.json();

            const filteredJobs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            setJobs(filteredJobs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePostJob = async () => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            alert("Unauthorized! Please log in.");
            navigate("/admin");
            return;
        }

        const payload = {
            title,
            description,
            location,
            company,
            jobType,
            salary,
            deadline,
            requirements,
            experience,
            applicationLink,
            contactEmail,
            skills
        };

        try {
            const res = await fetch("https://next-code-academy-1.onrender.com/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errData = await res.json();
                alert(`❌ Failed to post job: ${errData.error}`);
                return;
            }

            alert("✅ Job posted successfully!");
            fetchJobs();

            // Clear form fields
            setTitle("");
            setDescription("");
            setLocation("");
            setCompany("");
            setJobType("Full-time");
            setSalary("");
            setExperience("");
            setApplicationLink("");
            setContactEmail("");
            setSkills("");
            setDeadline("");
            setRequirements("");

        } catch (error) {
            console.error("Error posting job:", error);
            alert("❌ Error posting job. Check console.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e2e8f0] via-[#f0f4f8] to-[#cbd5e1] text-black font-['BIANKA']">
            
            {/* Heading Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Black Gradient Title */}
                <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-transparent bg-clip-text">
                    🚀 Admin Dashboard
                </h1>

                {/* Admin Form for Posting Jobs */}
                {isAdmin && (
                    <div className="bg-white shadow-lg rounded-lg p-10 border border-gray-200 
                        transition hover:scale-105 hover:shadow-2xl hover:border-blue-400">
                        
                        <h2 className="text-3xl font-bold text-[#1E293B] mb-8">📌 Post a New Job</h2>

                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                handlePostJob();
                            }}
                            className="grid gap-6"
                        >
                            {/* Fields Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                
                                {/* Input Fields */}
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Title" value={title}
                                    onChange={(e) => setTitle(e.target.value)} required
                                />
                                <textarea className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="4" required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Location" value={location}
                                    onChange={(e) => setLocation(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Company" value={company}
                                    onChange={(e) => setCompany(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Salary" value={salary}
                                    onChange={(e) => setSalary(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Experience" value={experience}
                                    onChange={(e) => setExperience(e.target.value)} required
                                />
                                <input type="datetime-local" className="p-3 rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-blue-400 w-full"
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Contact Email" value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Skills" value={skills}
                                    onChange={(e) => setSkills(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Application Link" value={applicationLink}
                                    onChange={(e) => setApplicationLink(e.target.value)} required
                                />
                                <input className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-600 focus:ring-2 focus:ring-blue-400 w-full"
                                    placeholder="Requirements" value={requirements}
                                    onChange={(e) => setRequirements(e.target.value)} required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="bg-[#029193] text-white font-bold py-3 rounded-lg w-full">
                                🚀 Post Job
                            </button>
                        </form>
                    </div>
                )}

                {/* Job Listings */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-[#1E293B] mb-8">📌 Job Listings</h2>

                    {loading ? (
                        <div className="text-center">
                            <p className="text-lg text-blue-500">Loading jobs...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {jobs.map((job) => (
                                <div key={job._id} className="bg-white shadow-lg rounded-lg p-6 border hover:scale-105 transition">
                                    <h3 className="text-2xl font-bold">{job.title}</h3>
                                    <p className="text-sm">{job.company} - {job.location}</p>
                                    <p>{job.description}</p>
                                     <p>💰 <strong>Salary:</strong> {job.salary}</p>
                                     <p>🎯 <strong>Skills:</strong> {job.skills}</p>
                                    <p>📅 <strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
                                    <p>📧 <strong>Contact:</strong> {job.contactEmail}</p>
                                     <p>🔗 <a href={job.applicationLink} target="_blank" className="text-blue-400 underline">Apply Here</a></p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}
