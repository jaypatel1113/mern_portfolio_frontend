import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const CardDetail = ({ data, icon, ...rest }) => {
    return (
        <motion.div className="box" {...rest}>
            <div className="year">
                <img src={icon} alt="Error" className="img" />
                {format(new Date(data.startdate), "MMM yyyy")} -&nbsp;
                {data.enddate
                    ? format(new Date(data.enddate), "MMM yyyy")
                    : "Present"
                }
            </div>
            <h3 className="bxName">{data.title}</h3>
            <p className="bxDetail" style={{ fontSize: "1.5rem" }}>
                {data.description}
            </p>
        </motion.div>
    );
};

export default CardDetail;
