import React from "react";
import { motion } from "framer-motion";

const itemA = {
    hidden: { opacity: 0, left: "-20px" },
    visible: { opacity: 1, left: 0 },
};

const LangCard = ({ name }) => {
    return (
        <motion.div
            className="langbox"
            style={{ position: "relative" }}
            variants={itemA}
        >
            <span className="lang">{name}</span>
        </motion.div>
    );
};

export default LangCard;
