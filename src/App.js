import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Bottombar from "./components/BottomBar/Bottombar";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import PreLoader from "./components/PreLoader/PreLoader";

import HomePage from "./components/Pages/HomePage";
import AboutMePage from "./components/Pages/AboutMePage";
import EducationWorkPage from "./components/Pages/EducationWorkPage";
import SkillPage from "./components/Pages/SkillPage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import LoginPage from "./components/Pages/LoginPage";

import AdminPanel from "./components/AdminPanel/AdminPanel";
import EducationTimeLine from "./components/AdminPanel/Components/EducationTimeLine";
import WorkTimeLine from "./components/AdminPanel/Components/WorkTimeLine";
import Skill from "./components/AdminPanel/Components/Skill";
import KnownLanguage from "./components/AdminPanel/Components/KnownLanguage";
import FrontendProject from "./components/AdminPanel/Components/FrontendProject";
import FullstackProject from "./components/AdminPanel/Components/FullstackProject";
import BackendProject  from "./components/AdminPanel/Components/BackendProject";
import LoginDetails from "./components/AdminPanel/Components/LoginDetails";
import AboutDetails from "./components/AdminPanel/Components/AboutDetails";
import SkillImages from "./components/AdminPanel/Components/SkillImage";
import HomeDetails from "./components/AdminPanel/Components/HomeDetails";
import Feedbacks from "./components/AdminPanel/Components/Feedbacks";
import SocialMediaLinks from "./components/AdminPanel/Components/SocialMediaLinks";

import { getUser, incVisitCount, loadUser } from "./actions/User";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


const App = () => {
    const [loading, setLoading] = useState(true);
    
    const { isAuthenticated } = useSelector((state) => state.login);
    const { user } = useSelector((state) => state.user);
    
    const dispatch = useDispatch();

    
    useEffect(() => {
        const loadData = async () => {
            await dispatch(getUser());
            await dispatch(loadUser());
            await dispatch(incVisitCount());
            // await dispatch({type: "CLEAR_ERROR"})
            setLoading(false);
        }
        loadData()
    }, [dispatch]);


    return (
        <Router>
            {loading ? (
                <PreLoader />
            ) : (
                <>
                    <ProgressBar />
                    <NavBar />

                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about-me" element={<AboutMePage user={user} />} />
                            <Route path="/education-work" element={<EducationWorkPage user={user} />} />
                            <Route path="/skills" element={<SkillPage user={user} />} />
                            <Route path="/projects" element={<ProjectPage user={user} />} />
                            <Route path="/contact" element={<ContactPage />} />

                            <Route path="/login" element={isAuthenticated ? <Navigate to="/admin" /> : <LoginPage />} />
                            <Route path="/admin" element={isAuthenticated ? <AdminPanel /> :<LoginPage />} />
                            <Route path="/update/login-details" element={isAuthenticated ? <LoginDetails /> :<LoginPage />} />
                            <Route path="/update/home-details" element={isAuthenticated ? <HomeDetails /> :<LoginPage />} />
                            <Route path="/update/about-details" element={isAuthenticated ? <AboutDetails /> :<LoginPage />} />
                            <Route path="/update/skill-images" element={isAuthenticated ? <SkillImages /> :<LoginPage />} />
                            <Route path="/update/education-timeline" element={isAuthenticated ? <EducationTimeLine /> :<LoginPage />} />
                            <Route path="/update/work-timeline" element={isAuthenticated ? <WorkTimeLine /> :<LoginPage />} />
                            <Route path="/update/skills" element={isAuthenticated ? <Skill /> :<LoginPage />} />
                            <Route path="/update/known-language" element={isAuthenticated ? <KnownLanguage /> :<LoginPage />} />
                            <Route path="/update/frontend-project" element={isAuthenticated ? <FrontendProject /> :<LoginPage />} />
                            <Route path="/update/fullstack-project" element={isAuthenticated ? <FullstackProject /> :<LoginPage />} />
                            <Route path="/update/backend-project" element={isAuthenticated ? <BackendProject /> :<LoginPage />} />
                            <Route path="/update/social-link" element={isAuthenticated ? <SocialMediaLinks /> :<LoginPage />} />

                            <Route path="/view/feedbacks" element={isAuthenticated ? <Feedbacks /> :<LoginPage />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </Routes>

                    <Footer user={user} />
                    <Bottombar />

                    <ToastContainer
                        theme="colored"
                        position="bottom-right"
                        style={{ fontSize: "14px" }}
                        autoClose={2000}
                    />
                </>
            )} 
        </Router>
    );
};

export default App;
