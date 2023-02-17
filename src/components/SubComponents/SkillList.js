import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

const contVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
        },
    },
};

const SkillList = () => {
    return (
        <Marquee
            speed={100}
            pauseOnHover={true}
            gradient={false}
        >
            <motion.p
                variants={contVariant}
                initial="hidden"
                animate="visible"
            >
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>REACT JS</span>
                <span>NODE JS</span>
                <span>EXPRESS JS</span>
                <span>MONGO DB</span>
                <span>REACT NATIVE</span>
                <span>PHP</span>
                <span>MY SQL</span>
                <span>J-QUERY</span>
                <span>SCSS</span>
                <span>TAILWING</span>
                <span>JAVA & JAVAFX</span>
                <span>C</span>
                <span>GIT & GITHUB</span>
                <span>DATA STRUCTURE</span>
                <span>EXCEL</span>
            </motion.p>
        </Marquee>
    );
};

export default SkillList;
