import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const CircularBar = ({ percentage, name }) => {
    return (
        <div className="item">
            <CircularProgressBar
                linearGradient={["#AA367C", "#4A2FBD"]}
                size="20rem"
                percent={percentage}
                round
                fontColor="#fff"
                stroke={7}
                fontSize="1.7rem"
                fontWeight={700}
            />
            <h5>{name}</h5>
        </div>
    );
};

export default CircularBar;
