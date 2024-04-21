import React from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap"
import './Menu.css'
import axios from "axios";
import { useState } from "react";

function Menus() {
    const [food, setFood] = useState('')
    const getFood = () => {
    axios.post('https://localhost:4000/menu', { id }).then(response => {   
        console.log(response.data); 
    }).catch(error => {
        console.error('Hiba történt:', error);
  })
}

    return(
            <Row>
                <Col xs={10} md={4} lg={6}>
                    <Card className="card">
                        <Card.Title>Hétfő</Card.Title>
                        <Card.Text>{food}</Card.Text>
                        <Card.Text>ebéd</Card.Text>
                        <Card.Text>vacsora</Card.Text>
                    </Card>
                </Col>
                <Col xs={10} md={4} lg={6}>
                    <Card className="card">
                        <Card.Title>Kedd</Card.Title>
                        <Card.Text>reggeli</Card.Text>
                        <Card.Text>ebéd</Card.Text>
                        <Card.Text>vacsora</Card.Text>
                    </Card>
                </Col>
                <Col xs={10} md={4} lg={6}>
                    <Card className="card">
                        <Card.Title>Szerda</Card.Title>
                        <Card.Text>reggeli</Card.Text>
                        <Card.Text>ebéd</Card.Text>
                        <Card.Text>vacsora</Card.Text>
                    </Card>
                </Col>
                <Col xs={10} md={4} lg={6}>
                    <Card className="card">
                        <Card.Title>Csütörtök</Card.Title>
                        <Card.Text>reggeli</Card.Text>
                        <Card.Text>ebéd</Card.Text>
                        <Card.Text>vacsora</Card.Text>
                    </Card>
                </Col>
                <Col xs={10} md={4} lg={6}>
                    <Card className="card">
                        <Card.Title>Péntek</Card.Title>
                        <Card.Text>reggeli</Card.Text>
                        <Card.Text>ebéd</Card.Text>
                        <Card.Text>-</Card.Text>
                    </Card>
                </Col>
              </Row> 
    )
}

export default Menus;