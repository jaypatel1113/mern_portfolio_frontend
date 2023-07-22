import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

import './ProgressBar.css';

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div className="progress-bar111" style={{ scaleX }}></motion.div>
    );
};

export default ProgressBar;
