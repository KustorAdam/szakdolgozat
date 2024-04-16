'use client';

import { useCookies } from "next-client-cookies";
import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap"




export default function pentek() {
    return (
        <form>

      

            <Form.Group>
                <Button href="/menu" style={{
                    boxShadow: "2px 2px 5px",
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    right: "720px",
                    marginLeft: "91%",
                    top: "20%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "80px",
                    height: "60px",
                    color: "black",
                    fontSize: "15px",
                    lineHeight: "60px"

                }} type="submit" variant="primary" >Vissza</Button>
            </Form.Group>
  


            
                <Card style={{
                    boxShadow: "2px 2px 5px",
                    position: "absolute", top: "4rem", right: "", left: " 500px",
                    background: "#12427c",
                    border: "1px solid black",
                    padding: "1rem",
                    margin: "11rem",
                    borderRadius: "2rem",
                    width: "350px",
                    height: "350px"
                }}>
                    <label style={{
                        position: "absolute",
                        top: "10px",
                        right: "85px",
                        color: "black"
                    }}>Péntek </label>
                     <div>
                    <input style={{
                        position: "absolute",
                        top: "80px",
                        left: "100px"
                    }} type="checkbox" />
                </div>
                    <label style={{
                        position: "absolute",
                        top: "80px",
                        color: "black"
                    }}>Reggeli </label>
                     <div>
                    <input style={{
                        position: "absolute",
                        top: "160px",
                        left: "100px"
                    }} type="checkbox" />
                </div>
                    <label style={{
                        position: "absolute",
                        top: "160px",
                        color: "black"
                    }}>Ebéd </label>
                     <div>
                    <input style={{
                        position: "absolute",
                        top: "240px",
                        left: "100px"
                    }} type="checkbox" />
                </div>               
                    <label style={{
                        position: "absolute",
                        top: "240px",
                        color: "black"
                    }}>Vacsora </label>

                </Card>
         
            
          
    
            <Form.Group>
                <Button style={{
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    marginLeft: "88%",
                    bottom: "35px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "120px",
                    height: "60px",
                    fontSize: "18px",
                    boxShadow: "2px 2px 5px",
                    right: "450px"
                }} type="submit" variant="primary">Mentés</Button>
            </Form.Group>

            <div style={{
                position: "absolute", top: "-20px", right: "", left: "0px",
                background: "#12427c",
                border: "1px solid black",
                padding: "50px",
                boxShadow: "2px 2px 5px",
                height: "px",
                width: "1379px"

            }}>
                <label style={{
                    position: "absolute",
                    color: "black",
                    right: "60px",
                    top: "47px",
                    fontSize: "20px"
                }}>Jenős Jenő</label>
            </div>


        </form>
    )

}