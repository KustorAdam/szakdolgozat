'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Container } from "react-bootstrap"

export default function LoginForm() {

    return (

        <form>
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
            }}>Csabás Csaba</label>
            </div>

            <div style={{

                position: "absolute", top: "110px", right: "", left: "17rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "11rem",
                margin: "1rem",
                borderRadius: "5rem",
                height: "30%",
                boxShadow: "2px 2px 5px",

                    position: "absolute", top: "1rem", right: "", left: "17rem",
                    background: "#12427c",
                    border: "1px solid black",
                    padding: "11rem",
                    margin: "1rem",
                    borderRadius: "5rem",

            }}>
                <Form.Group className="mb-3">
                    <div style={{
                        color: "white",

                    }}>
                        <Form.Label>Teljes Név</Form.Label>
                    </div>

                    <Form.Control style={{ 
                        
                        width: "250px"
                    }}

                    <Form.Control

                        type="name"
                        name="Nev"
                    />
                    <div style={{
                        color: "white",

                    }}>
                        <Form.Label>E-mail</Form.Label>
                    </div>
                    <Form.Control disabled={true} style={{
                        width: "250px"
                    }}
                        type="email"
                        name="email"
                    />
                    <div style={{
                        color: "white"
                    }}>
                        <Form.Label>Telefonszám</Form.Label>
                    </div>
                    <Form.Control style={{
                        width: "250px"
                    }}
                        type="phonenumber"
                        name="tnumber"
                    />
                    <div style={{
                        color: "white"
                    }}>
                        <Form.Label>Diákigazolványszám</Form.Label>
                    </div>
                    <Form.Control style={{
                        width: "250px"
                    }}
                        type="phonenumber"
                        name="dszam"
                    />
                </Form.Group>
                <Form.Group>
                    <Button style={{
                        position: "absolute",
                        top: "70%",
                        right: "40%",
                        width: "120px",
                        height: "60px",
                    }} type="submit" variant="primary">Frissítés</Button>
                </Form.Group>
            </div>
        </form>
            
    

    )
}










