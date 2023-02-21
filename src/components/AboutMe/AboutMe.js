import { Container, Row } from "react-bootstrap";

import { Information } from "./Information";

import "./AboutMe.css";

const AboutMe = ({aboutDetails, languagesKnown}) => {   

    return (
        <footer className="footer aboutme" id="aboutmesec">
            <Container>
                <Row className="align-items-center">
                    <Information aboutDetails={aboutDetails} languagesKnown={languagesKnown} />
                </Row>
            </Container>
        </footer>
    );
};

export default AboutMe;
