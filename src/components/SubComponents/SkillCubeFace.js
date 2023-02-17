import React from "react";

const SkillCubeFace = ({ img, no }) => {
    return (
        <div className={`skillface face${no}`}>
            <img src={img} alt={`face${no}`} />
        </div>
    );
};

export default SkillCubeFace;

// src="https://www.svgrepo.com/show/443176/brand-js.svg"
// src="https://www.svgrepo.com/show/503555/sass.svg"
// src="https://www.svgrepo.com/show/443088/brand-git.svg"
// src="https://www.svgrepo.com/show/306831/tailwindcss.svg"
// src="https://www.svgrepo.com/show/473729/mongodb.svg"
// src="https://www.svgrepo.com/show/347327/reactjs.svg"
