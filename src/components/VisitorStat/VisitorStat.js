import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountUp from 'react-countup';

import "./VisitorStat.css";

const VisitorStat = () => {
    const [classlist, setClasslist] = useState("visitor-stat show");

    const {visitors, allVisitors, uniqueVisitor} = useSelector((state)=> state.visitorStat)

    useEffect(() => {
      setTimeout(()=> {
        setClasslist("visitor-stat")
      }, 3000)
    }, [])
    
    return (
        <div className={classlist}>
            <div className="countup">
                <div className="data">Unique Visitors</div>
                <div className="value">
                    <CountUp end={uniqueVisitor.total} duration={2} />
                </div>
            </div>
            <div className="countup">
                <div className="data">Your Visits</div>
                <div className="value">
                    <CountUp end={visitors.total} duration={2} />
                </div>
            </div>
            <div className="countup">
                <div className="data">Total Visitors</div>
                <div className="value">
                    <CountUp end={allVisitors.total} duration={2} />
                </div>
            </div>
        </div>
    );
};

export default VisitorStat;
