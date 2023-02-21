import React from "react";

import Projects from "../Projects/Projects";

const ProjectPage = ({ user }) => {
    return (
        <div className="single-page" style={{ marginTop: 0 }}>
            <Projects
                frontendProjects={user.frontendProjects}
                fullstackProjects={user.fullstackProjects}
                backendProjects={user.backendProjects}
            />
        </div>
    );
};

export default ProjectPage;
