import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { RiUserSharedFill, RiAdminFill } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/User";

import "./NavBar.css";

const navVariant = {
    hidden: { opacity: 0, right: "-100vh" },
    visible: { opacity: 1, right: 0, transition: { delay: 0.2 } },
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const { isAuthenticated } = useSelector((state) => state.login);

    const dispatch = useDispatch();

    const backToTop = () => {
        window.scrollTo({ top: 0 });
    };

    const logOutHandle = () => {
        dispatch(logout());
    }

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
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <span className="logo">JAY PATEL</span>
                        </motion.div>
                    </NavLink>
                    {
                        isAuthenticated ? (
                            <div>
                                <NavLink to={"/logout"} onClick={logOutHandle}>
                                    <BiLogOutCircle />
                                </NavLink>
                                <NavLink to={"/admin"} style={{marginLeft:"20px"}}>
                                    <RiAdminFill />
                                </NavLink>
                            </div>
                        ) : (
                            <NavLink to={"/login"} onClick={backToTop}>
                                <RiUserSharedFill />
                            </NavLink>
                        )
                    }
                </motion.div>
            </Container>
        </Navbar>
    );
};

export default NavBar;
