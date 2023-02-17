import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
// import Skills from "./components/Skills";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import EducationWork from "./components/EducationWork/EducationWork";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Bottombar from "./components/BottomBar/Bottombar";

function App() {
    return (
        <div className="App">
            <ProgressBar />
            <NavBar />
            <Banner />
            <AboutMe />
            <EducationWork />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <Bottombar />
            <ToastContainer
                theme="colored"
                position="bottom-right"
                style={{ fontSize: "14px" }}
                autoClose={2000}
            />
        </div>
    );
}

export default App;
