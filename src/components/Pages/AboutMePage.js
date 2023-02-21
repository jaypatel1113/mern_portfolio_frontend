import React from "react";

import AboutMe from "../AboutMe/AboutMe";

import "./Pages.css";

const AboutMePage = ({ user }) => {
    return (
        <div className="single-page">
            <AboutMe
                aboutDetails={user.about}
                languagesKnown={user.languagesKnown}
            />
        </div>
    );
};

export default AboutMePage;
