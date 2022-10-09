import React from "react";
import { motion } from "framer-motion";

const CardDetail = ({ data, ...rest }) => {
    return (
        <motion.div className="box" {...rest}>
            <div className="year">
                <img src={data.icon} alt="Error" className="img" />
                {data.year}
            </div>
            <h3 className="bxName">{data.name}</h3>
            <p className="bxDetail" style={{ fontSize: "1.5rem" }}>
                {data.description}
            </p>
        </motion.div>
    );
};

export default CardDetail;
