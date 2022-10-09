import React from "react";
import { motion } from "framer-motion";

const FooterLink = ({ icon, link, color, ...rest }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--br-clr": color }}
            {...rest}
        >
            <img src={icon} alt="Error" />
        </motion.a>
    );
};

export default FooterLink;
