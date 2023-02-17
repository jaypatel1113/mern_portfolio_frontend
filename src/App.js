import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Bottombar from "./components/BottomBar/Bottombar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import ProgressBar from "./components/ProgressBar/ProgressBar";

import AboutMePage from "./components/Pages/AboutMePage";
import EducationWorkPage from "./components/Pages/EducationWorkPage";
import SkillPage from "./components/Pages/SkillPage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";

const App = () => {
    return (
        <Router>
            <ProgressBar />
            <NavBar />

            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-me" element={<AboutMePage />} />
                <Route path="/education-work" element={<EducationWorkPage />} />
                <Route path="/skills" element={<SkillPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>

            
            <Footer />
            <Bottombar />
            
            <ToastContainer
                theme="colored"
                position="bottom-right"
                style={{ fontSize: "14px" }}
                autoClose={2000}
            />
        </Router>
    );
};

export default App;
