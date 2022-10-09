import { Container, Row } from "react-bootstrap";
import { Newsletter } from "./Newsletter";

export const AboutMe = () => {
    return (
        <footer className="footer aboutme" id="aboutmesec">
            <Container>
                <Row className="align-items-center">
                    <Newsletter />
                </Row>
            </Container>
        </footer>
    );
};
