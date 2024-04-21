import React from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap"
import './Menu.css'
import axios from "axios";
import { useState } from "react";

function ThisWeek() {
    const [food, setFood] = useState('')
    const getFood = () => {
    axios.post('https://localhost:4000/menu', { }).then(response => {   
        console.log(response.data); 
    }).catch(error => {
        console.error('Hiba történt:', error);
  })
}

    return(
            <Row>
                <Form.Group>
                <Button disabled={true} style={{boxShadow: "2px 2px 5px", 
                    backgroundColor: "gray", 
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    right: "75%",
                    marginLeft: "91%",
                    top: "20%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "80px",
                    height: "60px",
                    color: "black",
                    fontSize: "15px",


                }} type="submit" variant="primary">Ez a hét</Button>
            </Form.Group>
            <Form.Group>
                <Button href="/menu2" style={{
                    boxShadow: "2px 2px 5px",
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    marginLeft: "27%",
                    top: "20%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "80px",
                    height: "60px",
                    color: "black",
                    fontSize: "15px",
                    lineHeight: "60px"
                }} type="submit" variant="primary">Jövő hét</Button>
            </Form.Group>


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

            <Form.Group>
                <Button style={{
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    marginLeft: "88%",
                    bottom: "45px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "120px",
                    height: "60px",
                    fontSize: "18px",
                    boxShadow: "2px 2px 5px",
                    right: "600px"
                }} type="submit" variant="primary">Mentés</Button>
            </Form.Group>
                </Col>
              </Row> 
    )
}

export default ThisWeek;