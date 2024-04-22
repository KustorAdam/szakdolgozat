import React from "react";
import { Row, Col, Card, Button, CardHeader, CardBody, CardText } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import "./MainPage.css"


export default function MainPage() {
    return(
        <Row xs={12} md={4} lg={10} className="row-container"> 
        <NavBar />     
            <Col className="col-content">    
            <Card className="cardudvozlo">
                Üdvözlünk
            </Card>
                <Card className="cardmenu">
                    <CardHeader className="header">Mai Menü</CardHeader>
                    <CardText className="ctext">reggeli</CardText>
                    <CardText className="ctext">ebéd</CardText>
                    <CardText className="ctext">vacsora</CardText>
                </Card>
            </Col>
        </Row> 
    )       
}