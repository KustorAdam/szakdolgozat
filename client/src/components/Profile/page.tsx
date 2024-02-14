'use client';

import { useCookies } from "next-client-cookies";
import React from "react";
import { Form, Button } from "react-bootstrap"

export default function LoginForm() {


    return (
      <form>
            <Form.Group className="mb-3">
                <Form.Label>Teljsen Név</Form.Label>
                <Form.Control 
                    type="name" 
                    name="Nev"
                />
               
                <Form.Label>E-mail</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email"
                />
                     <Form.Label>Telefonszám</Form.Label>
                <Form.Control 
                    type="phonenumber" 
                    name="tnumber"
                />
                     <Form.Label>Diákigazolványszám</Form.Label>
                <Form.Control 
                    type="phonenumber" 
                    name="dszam"
                />



         
            </Form.Group>
            <Form.Group>
                <Button type="submit" variant="primary">Frissítés</Button>
            </Form.Group>
        </form>
    )
}








    
   
