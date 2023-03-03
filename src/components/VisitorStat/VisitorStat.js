import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import VisitStatCard from "../SubComponents/VisitStatCard";

import "./VisitorStat.css";

const VisitorStat = () => {
    const [classlist, setClasslist] = useState("visitor-stat show");

    const { visitors, allVisitors, uniqueVisitor } = useSelector((state) => state.visitorStat);

    useEffect(() => {
        setTimeout(() => {
            setClasslist("visitor-stat");
        }, 3000);
    }, []);

    return (
        <div className={classlist}>
            <VisitStatCard
                text={"Unique Visits"}
                total={uniqueVisitor.total}
                color={"#eb4d4b"}
                title={"Total Unique Visitors"}
            />
            <VisitStatCard
                text={"Your Visits"}
                total={visitors.total}
                color={"#3498db"}
                title={"Your Total visits from current Network"}
            />
            <VisitStatCard
                text={"Total Visits"}
                total={allVisitors.total}
                color={"#e67e22"}
                title={"Total Visitors"}
            />
        </div>
    );
};

export default VisitorStat;
