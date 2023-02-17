import { Container, Row } from "react-bootstrap";

import { Information } from "./Information";

import './AboutMe.css'

const AboutMe = () => {
    return (
        <footer className="footer aboutme" id="aboutmesec">
            <Container>
                <Row className="align-items-center">
                    <Information />
                </Row>
            </Container>
        </footer>
    );
};

export default AboutMe;
