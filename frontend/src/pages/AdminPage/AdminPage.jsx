import { Col, Form, FormGroup, Row } from "react-bootstrap";


export default function AdminPage() {
    <Row>
        <Col>
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
        </Col>
    </Row>
}