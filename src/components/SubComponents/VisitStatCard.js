import React from "react";
import CountUp from 'react-countup';

const VisitStatCard = ({text, total, color, title}) => {
    return (
        <div className="countup" style={{ "--clr": color }}>
            <div className="data">{text}</div>
            <div className="value" data-title={title}>
                <CountUp end={total} duration={2} />
            </div>
        </div>
    );
};

export default VisitStatCard;
