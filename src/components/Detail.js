import React from "react";
import { motion } from "framer-motion";

const Detail = ({ src, name, value, ...rest }) => {
    return (
        <motion.h3
        {...rest}
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
