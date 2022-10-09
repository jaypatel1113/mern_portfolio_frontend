import React from "react";

import EyeContainer from "./SubComponents/EyeContainer";
import MenuList from "./SubComponents/MenuList";

const Bottombar = () => {
    return (
        <div className="btmcnt">
            <MenuList />
            <EyeContainer />
        </div>
    );
};

export default Bottombar;
