import React from "react";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import AboutMe from "../AboutMe/AboutMe";
import EducationWork from "../EducationWork/EducationWork";

const HomePage = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <EducationWork />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default HomePage;
