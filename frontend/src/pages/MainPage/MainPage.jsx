import { Row, Col, Card, Button, CardHeader, CardBody, CardText } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";

export default function MainPage() {
    return(
        <Row xs={12} md={4} lg={10}>      
        <NavBar />
            <Col>    
                <Card>
                    <CardHeader>Mai Menü</CardHeader>
                    <CardText>reggeli</CardText>
                    <CardText>ebéd</CardText>
                    <CardText>vacsora</CardText>
                </Card>
            </Col>
        </Row> 
    )       
}