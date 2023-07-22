import { motion } from "framer-motion";
import React from "react";

import CardDetail from "./CardDetail";

const itemA = {
    hidden: { opacity: 0, left: "-20vh" },
    visible: { opacity: 1, left: 0, transition: { delay: 0.5 } },
};
const itemB = {
    hidden: { opacity: 0, right: "-20vh" },
    visible: { opacity: 1, right: 0, transition: { delay: 0.5 } },
};

const EduWorkCard = ({ titlee, animation, animation2, details, icon }) => {
    return (
        <>
            <motion.h2
                className="title"
                style={{ position: "relative" }}
                variants={itemA}
                animate={animation}
            >
                {titlee}
            </motion.h2>
            {details?.map((data, ind) => (
                <CardDetail
                    data={data}
                    key={ind}
                    icon={icon}
                    style={{ position: "relative" }}
                    variants={itemB}
                    animate={animation2}
                />
            ))}
        </>
    );
};

export default EduWorkCard;
