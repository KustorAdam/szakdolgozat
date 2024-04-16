'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Placeholder } from "react-bootstrap"

export default function RegisterForm() {
    const cookies = useCookies();




    return (
        <form>
            <Form.Group style={{
                textAlign: "center",
            }} className="mb-3">



                <Form.Control style={{
                    width: "230px",

                }}

                    placeholder="Email cím"
                    type="email"
                    name="email"

                />
            </Form.Group>



            <Form.Group style={{
                textAlign: "center",
            }} className="mb-3">

                <Form.Control style={{
                    width: "230px"
                }}

                    placeholder="Jelszó"
                    type="password"
                    name="password"

                />


            </Form.Group>
            <Form.Group style={{
                textAlign: "center",
            }} className="mb-3">

                <Form.Control style={{
                    width: "230px"
                }}


                    placeholder="Diákigazolványszám"
                    type="phonenumber"
                    name="number"

                />
            </Form.Group >

            <Form.Group style={{
                textAlign: "center",
            }} className="mb-3">

                <Form.Control style={{
                    width: "230px"
                    
                }}

                    placeholder="Teljes Név"
                    type="name"
                    name="name"

                />
            </Form.Group>

            <Form.Group style={{
                textAlign: "center",
            }} className="mb-3">

                <Form.Control style={{
                    width: "230px"
                }}

                    placeholder="Telefonszám"
                    type="phonenumber"
                    name="phonenumber"

                />
            </Form.Group>



            <div style={{ textAlign: "center" }}>

                <Form.Group>
                    <Button type="submit" variant="primary">Bejelentkezés</Button>
                </Form.Group>
            </div>
        </form>
    )
}