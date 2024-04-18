'use client';

import { useCookies } from "next-client-cookies";
import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap"




export default function pentek() {
    return (
        <form>      
                <Card style={{
                    boxShadow: "2px 2px 5px",
                    position: "absolute", top: "130px", right: "", left: "300px",
                    background: "#12427c",
                    border: "1px solid black",
                    padding: "1rem",
                   
                    borderRadius: "2rem",
                    width: "1100px",
                    height: "550px"
                }}>
                    <Card style={{
                   
                    position: "absolute", top: "", right: "", left: "50px",
                    background: "white",
              
                    padding: "1rem",
              
                    width: "1000px",
                    height: "450px"
                }}></Card>

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
                }}>Csabás csaba</label>
            </div>


        </form>
    )

}
















