import { motion } from "framer-motion";

import MongoDb from '../../assets/img/Skills/mongodb.svg';
import Git from '../../assets/img/Skills/brand-git.svg';
import Js from '../../assets/img/Skills/js.svg';
import ReactJs from '../../assets/img/Skills/reactjs.svg';
import Scss from '../../assets/img/Skills/sass.svg';
import Tailwind from '../../assets/img/Skills/tailwindcss.svg';

import colorSharp from "../../assets/img/color-sharp.png";

import Title from "../SubComponents/Title";
import SkillList from "../SubComponents/SkillList";
import SkillCubeFace from "../SubComponents/SkillCubeFace";

import './Skills.css';

const contVariant = {
    hidden: {
        scale: 0.7,
    },
    visible: {
        scale: 1,
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

const cubeVariant = {
    hidden: {
        top: "-150px",
        opacity: 0,
        scale: 0
    },
    visible: {
        top: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1
        }
    }
}

const Skills = () => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <motion.div
                            className="skill-bx wow"
                            variants={contVariant}
                            initial="hidden"
                            whileInView="visible"
                            style={{ position: "relative" }}
                            // viewport={{once: true}}
                        >
                            <Title
                                h2={"Skills"}
                                p={"Here are my Top and Prioritized Skills.."}
                                txtVariant={txtVariant}
                            />

                            <div className="skillcontainer">
                                <motion.div className="skillcube"
                                    variants={cubeVariant}
                                >
                                    <SkillCubeFace img={ReactJs} no={1} />
                                    <SkillCubeFace img={MongoDb} no={2} />
                                    <SkillCubeFace img={Js} no={3} />
                                    <SkillCubeFace img={Tailwind} no={4} />
                                    <SkillCubeFace img={Scss} no={5} />
                                    <SkillCubeFace img={Git} no={6} />
                                </motion.div>
                                <div className="marquee">
                                    <SkillList />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="Error"
            />
            <img
                className="background-image-left secimg"
                src={colorSharp}
                alt="Error"
            />
        </section>
    );
};

export default Skills;
