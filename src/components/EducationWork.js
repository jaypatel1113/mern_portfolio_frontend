import React from "react";
import ExpCard from "./ExpCard";
import { educationData } from "./ProjectData/educationData";
import { experienceData } from "./ProjectData/experienceData";

export const EducationWork = () => {
    return (
        <section className="skill eduwork" id="educations">
            <div className="container">
                <div className="skill-bx wow zoomIn">
                    <h2>Educations & Work</h2>
                    <p>Here are my Education details Work Experience.</p>
                    <div className="rows">
                        <div className="cols">
                            <h2 className="title">My Education</h2>
                            {educationData.map((data, ind) => <ExpCard data={data} key={ind} />)}
                        </div>
                        <div className="cols">
                            <h2 className="title">My Experience</h2>
                            {experienceData.map((data, ind) => <ExpCard data={data} key={ind} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
