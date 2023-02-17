import React from "react";

import EyeContainer from "./EyeContainer/EyeContainer";
import MenuLinks from "./MenuLinks/MenuLinks";

import './BottomBar.css';

const Bottombar = () => {
    return (
        <div className="btmcnt">
            <MenuLinks />
            <EyeContainer />
        </div>
    );
};

export default Bottombar;
