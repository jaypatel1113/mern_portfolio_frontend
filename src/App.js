import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Bottombar from "./Components/BottomBar/Bottombar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Pages/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

import AboutMePage from "./Components/Pages/AboutMePage";
import EducationWorkPage from "./Components/Pages/EducationWorkPage";
import SkillPage from "./Components/Pages/SkillPage";
import ProjectPage from "./Components/Pages/ProjectPage";
import ContactPage from "./Components/Pages/ContactPage";
import LoginPage from "./Components/Pages/LoginPage";

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
                <Route path="/login" element={<LoginPage />} />
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
