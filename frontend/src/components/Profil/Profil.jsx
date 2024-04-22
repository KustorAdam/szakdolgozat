import { Col, FormGroup, Row, Form, Button, FormLabel } from "react-bootstrap";
import "./Profil.css"

export default function Profil() {

    return (
        <Row>
            <Col>
            <form className="form">
                <FormLabel className="formlabel">Adatok frissítése</FormLabel>
                <FormGroup>
                    <Form.Label>Teljes Név</Form.Label>
                    <Form.Control type="text" name="text"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Email cím</Form.Label>
                    <Form.Control type="text" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Telefonszám</Form.Label>
                    <Form.Control type="phone" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Szülő neve</Form.Label>
                    <Form.Control type="text" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Szülő telefonszáma</Form.Label>
                    <Form.Control type="phone" />
                </FormGroup>

                <Button variant="primary" type="submit">
                    Elküldés
                </Button>
            </form>
            </Col>
        </Row>
    )
}