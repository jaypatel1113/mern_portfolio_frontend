import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

export const AboutMe = () => {
    return (
        <footer className="footer aboutme" id="aboutmesec">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                </Row>
            </Container>
        </footer>
    );
};
