import React from "react";
import { motion } from "framer-motion";

const itemA = {
    hidden: { scale: 0, left: "-20vh" },
    visible: { scale: 1, left: 0 },
};
const itemB = {
    hidden: { scale: 0, right: "-20vh" },
    visible: { scale: 1, right: 0 },
};

const Detail = ({ src, name, value, left }) => {
    return (
        <motion.h3
            style={{ position: "relative" }}
            variants={left===1 ? itemA : itemB}
        >
            <span>
                <img src={src} alt="Error" className="img" />
                {name} :
            </span>
            {" "+ value}
        </motion.h3>
    );
};

export default Detail;
