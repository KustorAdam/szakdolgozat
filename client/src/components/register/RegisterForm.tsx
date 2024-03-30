'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Placeholder } from "react-bootstrap"

export default function RegisterForm() {
    const cookies = useCookies();

        
  

    return (
        <form>
            <Form.Group className="mb-3">
            
          
                
                <Form.Control 
                
                placeholder="Email cím"
                    type="email" 
                    name="email"
                    style={{border: "2  px solid black"}}
                />
            </Form.Group>



            <Form.Group className="mb-3">
                
                <Form.Control 
                
                placeholder="Jelszó"
                    type="password" 
                    name="password"
                    style={{border: "2px solid black"}}
                />
                
                
            </Form.Group>
<Form.Group className ="mb-3">

            <Form.Control 
           
            
                placeholder="Diákigazolványszám"
                    type="phonenumber" 
                    name="number"
                    style={{border: "2px solid black"}}
                />
                </Form.Group>

                <Form.Group className ="mb-3">

                <Form.Control 
                
                placeholder="Teljes Név"
                    type="name" 
                    name="name"
                    style={{border: "2px solid black"}}
                />
                </Form.Group>

                <Form.Group className ="mb-3">

                <Form.Control 
                
                placeholder="Telefonszám"
                    type="phonenumber" 
                    name="phonenumber"
                    style={{border: "2px solid black"}}
                />
                </Form.Group>



            <div style={{textAlign: "center"}}>
                
            <Form.Group>
                <Button type="submit" variant="primary">Bejelentkezés</Button>
            </Form.Group>
            </div>
        </form>
    )
}