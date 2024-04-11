
'use client';

import { useCookies } from "next-client-cookies";
import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap"




export default function menu() {
    return (
        <form>


            <Form.Group>
                <Button style={{
                     boxShadow: "2px 2px 5px",
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    right: "75%",
                    marginLeft: "91%",
                    top: "20%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "80px",
                    height: "60px"

                }} type="submit" variant="primary">Ez a hét</Button>
            </Form.Group>
            <Form.Group>
                <Button style={{
                     boxShadow: "2px 2px 5px",
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    marginLeft: "27%",
                    top: "20%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "80px",
                    height: "60px"
                }} type="submit" variant="primary">Jövő hét</Button>
            </Form.Group>


            <Card style={{
 boxShadow: "2px 2px 5px",
                position: "absolute", top: "4rem", right: "", left: " 7rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "1rem",
                margin: "11rem",
                borderRadius: "2rem",
                width: "180px",
                height: "300px"
            }}></Card>
            <Card style={{
 boxShadow: "2px 2px 5px",
                position: "absolute", top: "4rem", right: "", left: " 22rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "1rem",
                margin: "11rem",
                borderRadius: "2rem",
                width: "180px",
                height: "300px"
            }}></Card>

            <Card style={{
 boxShadow: "2px 2px 5px",
                position: "absolute", top: "4rem", right: "", left: " 37rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "1rem",
                margin: "11rem",
                borderRadius: "2rem",
                width: "180px",
                height: "300px"
            }}></Card>

            <Card style={{
  boxShadow: "2px 2px 5px",
                position: "absolute", top: "4rem", right: "", left: " 52rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "1rem",
                margin: "11rem",
                borderRadius: "2rem",
                width: "180px",
                height: "300px"
            }}></Card>

            <Card style={{
  boxShadow: "2px 2px 5px",
                position: "absolute", top: "4rem", right: "", left: " 67rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "1rem",
                margin: "11rem",
                borderRadius: "2rem",
                width: "180px",
                height: "300px"
              
            }}></Card>

<Form.Group>
                <Button style={{
                    backgroundColor: "#5131de",
                    borderColor: "#5131de",
                    float: "right",
                    position: "absolute",
                    borderRadius: "7px",
                    marginLeft: "88%",
                    top: "81%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "120px",
                    height: "60px",
                    fontSize: "18px",
                    boxShadow: "2px 2px 5px"
                }} type="submit" variant="primary">Mentés</Button>
            </Form.Group>




        </form>
    )

}