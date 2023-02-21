import React from "react";

import Skills from "../Skills/Skills";

const SkillPage = ({user}) => {
    return (
        <div className="single-page" style={{ marginTop: "4rem" }}>
            <Skills 
                skills={user.skills} 
                skillImages={user.skillsCubeImg} 
            />
        </div>
    );
};

export default SkillPage;
