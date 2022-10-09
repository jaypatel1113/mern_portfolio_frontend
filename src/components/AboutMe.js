import { Container, Row } from "react-bootstrap";

import { Information } from "./Information";

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
