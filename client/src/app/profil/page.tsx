'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Container } from "react-bootstrap"

export default function LoginForm() {

    return (

        <form>

            <div style={{
                    position: "absolute", top: "1rem", right: "", left: "17rem",
                    background: "#12427c",
                    border: "1px solid black",
                    padding: "11rem",
                    margin: "1rem",
                    borderRadius: "5rem",

                }}>
                <Form.Group className="mb-3">
                    <div style={{
                        color: "white"
                    }}>
                        <Form.Label>Teljsen Név</Form.Label>
                    </div>
                    <Form.Control
                        type="name"
                        name="Nev"
                    />
                    <div style={{
                        color: "white"
                    }}>
                        <Form.Label>E-mail</Form.Label>
                    </div>
                    <Form.Control
                        type="email"
                        name="email"
                    />
                    <div style={{
                        color: "white"
                    }}>
                        <Form.Label>Telefonszám</Form.Label>
                    </div>
                    <Form.Control
                        type="phonenumber"
                        name="tnumber"
                    />
                    <div style={{
                        color: "white"
                    }}>
                        <Form.Label>Diákigazolványszám</Form.Label>
                    </div>
                    <Form.Control
                        type="phonenumber"
                        name="dszam"
                    />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="primary">Frissítés</Button>
                </Form.Group>
            </div>
        </form>

    )
}










