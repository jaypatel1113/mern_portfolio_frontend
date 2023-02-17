import { Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import gitIcon from "../../Assets/img/nav-icon6.svg";
import liveIcon from "../../Assets/img/live.svg";

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    gitLink,
    demoLink,
    backendLink,
    ...rest
}) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const animation = useAnimation();

    useEffect(() => {
        // if(inView) {
        //     animation.start({
        //         opacity: 1, scale: 1 ,
        //         transition: {
        //             delay: 0.2
        //         },
        //     });
        // } else if(!inView) {
        //     animation.start({
        //         opacity: 0, scale: 0
        //     });
        // }
        // console.log("in view = ", inView );
    }, [inView, animation]);

    return (
        <Col size={12} sm={6} md={4} ref={ref}>
            <motion.div
                className="proj-imgbx"
                //  animate={animation}
                {...rest}
            >
                <img src={imgUrl} alt="Error" className="projectImg" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a
                        target="_blank"
                        href={gitLink}
                        className="git"
                        rel="noreferrer"
                    >
                        <img src={gitIcon} alt="Error" className="projectGit" />
                    </a>
                    {backendLink && (
                        <a
                            target="_blank"
                            href={backendLink}
                            className="backgit"
                            rel="noreferrer"
                        >
                            <img
                                src={gitIcon}
                                alt="Error"
                                className="projectGit backlink"
                            />
                        </a>
                    )}
                    <a
                        target="_blank"
                        href={demoLink}
                        className="demo"
                        rel="noreferrer"
                    >
                        <img
                            src={liveIcon}
                            alt="Error"
                            className="projectGit projectDemo"
                        />
                    </a>
                </div>
            </motion.div>
        </Col>
    );
};
