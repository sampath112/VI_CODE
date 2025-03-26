import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Roadmaps from "./pages/Roadmaps";
import CareerPaths from "./pages/careerpath";
import LeetcodePage from "./pages/Leetcode";
import LandingPage from "./pages/Landingpage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Set LandingPage as the default route */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/roadmaps" element={<Roadmaps />} />
                <Route path="/careerpaths" element={<CareerPaths />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leetcode" element={<LeetcodePage />} />
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;
