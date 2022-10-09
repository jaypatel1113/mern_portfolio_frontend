import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import EducationWork from "./components/EducationWork";
import ProgressBar from "./components/SubComponents/ProgressBar";
import Bottombar from "./components/Bottombar";

function App() {
    return (
        <div className="App">
            <ProgressBar />
            <Bottombar />
            <NavBar />
            <Banner />
            <AboutMe />
            <EducationWork />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
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
