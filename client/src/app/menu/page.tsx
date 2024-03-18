
'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Container } from "react-bootstrap"




export default function menu() {
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

                <Form.Group>
                    <Button style={{
                            backgroundColor: "#5131de",
                            borderColor: "#5131de"

                    }}      type="submit" variant="primary">Ez a hét</Button>
                </Form.Group>
                <Form.Group>
                    <Button   style={{
                          backgroundColor: "#5131de",
                          borderColor: "#5131de",
                          float: "right",
                          position: "absolute",
                          right: "-91%",
                          marginLeft: "91%"

                    }} type="submit" variant="primary">Jövő hét</Button>
                </Form.Group>








            </div>

        </form>



    )

}