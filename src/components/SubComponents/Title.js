import React from "react";
import { motion } from "framer-motion";

const Title = ({h2, p, txtVariant}) => {
    return (
        <div>
            <motion.h2
                variants={txtVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                style={{ position: "relative" }}
            >
                {(h2 || "")}
            </motion.h2>
            <motion.p
                variants={txtVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                style={{ position: "relative" }}
            >
                {(p || "")}
            </motion.p>
        </div>
    );
};

export default Title;
