import { Col, FormGroup, Row, Form, Button } from "react-bootstrap";
import "./Profil.css"

export default function Profil() {

    return (
        <Row>
            <Col>
            <form className="form">
                <FormGroup>
                    <Form.Label>Teljes Név</Form.Label>
                    <Form.Control type="text" name="text"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Email cím</Form.Label>
                    <Form.Control type="text" name="text"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Telefonszám</Form.Label>
                    <Form.Control type="phone" name="text"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Szülő neve</Form.Label>
                    <Form.Control type="text" name="text"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Szülő telefonszáma</Form.Label>
                    <Form.Control type="phone" name="text"/>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Elküldés
                </Button>
            </form>
            </Col>
        </Row>
    )
}