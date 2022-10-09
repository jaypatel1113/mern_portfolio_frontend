import React from "react";
import ExpCard from "./ExpCard";
import { educationData } from "./ProjectData/educationData";
import { experienceData } from "./ProjectData/experienceData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const container = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.8,
        },
    },
};
const itemA = {
    hidden: { opacity: 0, left: "-20vh" },
    visible: { opacity: 1, left: 0, transition: {delay: 1.5} },
};
const itemB = {
    hidden: { opacity: 0, right: "-20vh" },
    visible: { opacity: 1, right: 0, transition: {delay: 1.5} },
};

const contVariant = {
    hidden: {
        scale: 0.7,
    },
    visible: {
        scale: 1,
        transition: {
            staggerChildren: 0.5,
        }

    },
};

const txtVariant = {
    hidden: {
        top: "-50px",
        opacity: 0,
    },
    visible: {
        top: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
        },
    },
};

export const EducationWork = () => {
    const {ref, inView} = useInView({
        threshold: 0.3
    });
    // const {ref2, inView2} = useInView({
    //     threshold: 0.5
    // });
    const animation = useAnimation();
    const animation2 = useAnimation();

    useEffect(()=> {
        if(inView) {
            animation.start("visible");
            animation2.start("visible");

        } else if(!inView) {
            animation.start("hidden");
            animation2.start("hidden");
        }
        // if(inView2) {
        //     animation.start("visible");
        //     animation2.start("visible");
        // } else if(!inView2) {
        //     animation.start("hidden");
        //     animation2.start("hidden");
        // }
        // console.log("in view = ", inView );
    }, [inView, animation, animation2])

    return (
        <section className="skill eduwork" id="educations">
            <div className="container">
                <motion.div
                    className="skill-bx wow"
                    variants={contVariant}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{once: true}}
                    style={{ position: "relative" }}
                >
                    <motion.h2
                        variants={txtVariant}
                        style={{ position: "relative" }}
                    >
                        Educations & Work
                    </motion.h2>
                    <motion.p
                        style={{ position: "relative" }}
                        variants={txtVariant}
                    >
                        Here are my Education details Work Experience.
                    </motion.p>
                    <motion.div className="rows" variants={container}>
                        <div
                            className="cols"
                            // ref={ref2}
                        >
                            <motion.h2
                                className="title"
                                style={{ position: "relative" }}
                                variants={itemA}
                                // animate={animation}
                            >
                                My Education
                            </motion.h2>
                            {educationData.map((data, ind) => (
                                <ExpCard
                                    data={data}
                                    key={ind}
                                    style={{ position: "relative" }}
                                    variants={itemB}
                                    // animate={animation2}
                                />
                            ))}
                        </div>
                        <div 
                            ref={ref}
                            className="cols" 
                        >
                            <motion.h2
                                className="title"
                                style={{ position: "relative" }}
                                variants={itemA}
                                animate={animation}
                            >
                                My Experience
                            </motion.h2>
                            {experienceData.map((data, ind) => (
                                <ExpCard
                                    data={data}
                                    key={ind}
                                    style={{ position: "relative" }}
                                    variants={itemB}
                                    animate={animation2}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
