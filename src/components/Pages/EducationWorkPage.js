import React from "react";

import EducationWork from "../EducationWork/EducationWork";

const EducationWorkPage = ({ user }) => {
    return (
        <div className="single-page" style={{ marginTop: "18rem" }}>
            <EducationWork
                educationTimeline={user.educationTimeline}
                workTimeline={user.workTimeline}
            />
        </div>
    );
};

export default EducationWorkPage;
