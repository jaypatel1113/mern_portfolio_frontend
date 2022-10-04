import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const LangCard = ({perc, name}) => {
    return (
        <div className="box">
            <CircularProgressBar
                colorCircle="#e6e6e6"
                size="20rem"
                linearGradient={["#AA367C", "#4A2FBD"]}
                cut={30}
                percent={perc}
                rotation={144}
                round
                fontColor="#000"
                stroke="7"
                fontSize="1.7rem"
                fontWeight={500}
            />
            <h4 className="lang">{name}</h4>
        </div>
    );
};

export default LangCard;
