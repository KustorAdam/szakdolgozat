import React from "react";
import { Form, Button, Container, Card, Col, Row, FormGroup } from "react-bootstrap"
import './Menu.css'
import axios from "axios";
import { useState,useEffect } from "react";
import NavBar from "../Navbar/Navbar";

function ThisWeek() {
    const [food, setFood] = useState([])
    const [userid, setUserid] = useState("")
    const [disableddays,setDisableddays] = useState([])
    
    

    useEffect(() => {
        const getFood = async () => {
            try {
              const response = await axios.post('http://localhost:4004/menuthisweek', {  });
              console.log("thisweek",response.data)
              setFood(response.data);
            } catch (error) {
              console.error(error);
            }
          };
    
    getFood()

  },[])
  useEffect(() => {
        
    
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const tokenParts = storedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        
        setUserid(payload.id)
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      
     }
}, []);
  
  const handleCancellation = (day) => {
    setDisableddays([...disableddays,day])
    axios.post('http://localhost:4004/cancelday', {
        studentid: userid,
        weeklyspecial : day
        
    })
  }



    return( 
        <Container className="containercards">   
            
                <NavBar />
                
                {food.length>0 && (
                    <>
                <Col xs={10} md={4} lg={4}>
                    <Card className="card">
                        <Card.Title>Hétfő</Card.Title>
                        <Card.Text>{food[0].breakfast}</Card.Text>
                        <Card.Text>{food[0].lunch}</Card.Text>
                        <Card.Text>{food[0].dinner}</Card.Text>

                        <Button className="lemondas" disabled={disableddays.includes(1)}  onClick={()=> handleCancellation(1)}>Lemondás</Button>

                    </Card>
                </Col>
                    
                
                <Col xs={10} md={4} lg={4}>
                    <Card className="card">
                        <Card.Title>Kedd</Card.Title>
                        <Card.Text>{food[1].breakfast}</Card.Text>
                        <Card.Text>{food[1].lunch}</Card.Text>
                        <Card.Text>{food[1].dinner}</Card.Text>

                        <Button className="lemondas" disabled={disableddays.includes(2)}  onClick={() => handleCancellation(2)}>Lemondás</Button>

                    </Card>
                </Col>
                    
                
                <Col xs={10} md={4} lg={4}>
                    <Card className="card">
                        <Card.Title>Szerda</Card.Title>
                        <Card.Text>{food[2].breakfast}</Card.Text>
                        <Card.Text>{food[2].lunch}</Card.Text>
                        <Card.Text>{food[2].dinner}</Card.Text>

                        <Button className="lemondas" disabled={disableddays.includes(3)}  onClick={() => handleCancellation(3)}>Lemondás</Button>

                    </Card>
                </Col>
                    
                
                <Col xs={10} md={4} lg={4}>
                    <Card className="card">
                        <Card.Title>Csütörtök</Card.Title>
                        <Card.Text>{food[3].breakfast}</Card.Text>
                        <Card.Text>{food[3].lunch}</Card.Text>
                        <Card.Text>{food[3].dinner}</Card.Text>

                        <Button className="lemondas" disabled={disableddays.includes(4)}  onClick={() =>handleCancellation(4)}>Lemondás</Button>

                    </Card>
                </Col>
                    
                
                <Col xs={10} md={4} lg={4}>
                    <Card className="card">
                        <Card.Title>Péntek</Card.Title>
                        <Card.Text>{food[4].breakfast}</Card.Text>
                        <Card.Text>{food[4].lunch}</Card.Text>
                        <Card.Text>-</Card.Text>

                        <Button className="lemondas" disabled={disableddays.includes(5)}  onClick={() => handleCancellation(5)}>Lemondás</Button>
                        
                    </Card>
                </Col>
                    
            </>
        )}       
    
</Container>      
)
}


export default ThisWeek;