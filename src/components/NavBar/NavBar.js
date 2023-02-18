import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";

// import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { RiUserSharedFill } from "react-icons/ri";

const navVariant = {
    hidden: { opacity: 0, right: "-100vh" },
    visible: { opacity: 1, right: 0, transition: { delay: 0.2 } },
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const backToTop = () => {
        window.scrollTo({ top: 0 });
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        // <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <motion.div
                    variants={navVariant}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <NavLink to={"/"} onClick={backToTop}>
                        {/* <Navbar.Brand> */}
                        {/* <img src={logo} alt="Logo" className="logo" /> */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <span className="logo">JAY PATEL</span>
                        </motion.div>
                        {/* </Navbar.Brand> */}
                    </NavLink>
                    <NavLink to={"/login"} onClick={backToTop}>
                        <RiUserSharedFill />
                    </NavLink>
                </motion.div>
            </Container>
        </Navbar>
        // </Router>
    );
};

export default NavBar;
