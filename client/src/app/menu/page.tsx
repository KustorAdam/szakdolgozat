
'use client';

import { useCookies } from "next-client-cookies";
import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap"




export default function menu() {
    return (
        <form>




            <Form.Group>
                <Button disabled={true} style={{
                    boxShadow: "2px 2px 5px",
                    backgroundColor: "gray",
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
                    height: "60px",
                    color: "black",
                    fontSize: "15px",


                }} type="submit" variant="primary">Ez a hét</Button>
            </Form.Group>
            <Form.Group>
                <Button href="/menu2" style={{
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
                    height: "60px",
                    color: "black",
                    fontSize: "15px",
                    lineHeight: "60px"
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
            }}>
                <div>
                    <input style={{
                        position: "absolute",
                        top: "px",
                        left: "px",
                    }} type="checkbox" />
                </div>
                <label style={{
                    position: "absolute",
                    top: "10px",
                    right: "85px",
                    color: "black"
                }}>Hetfő </label>
                <label style={{
                    position: "absolute",
                    top: "80px",
                    color: "black"
                }}>Reggeli </label>
                <label style={{
                    position: "absolute",
                    top: "160px",
                    color: "black"
                }}>Ebéd </label>
                <label style={{
                    position: "absolute",
                    top: "240px",
                    color: "black"
                }}>Vacsora </label>

            </Card>


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
            }}>
                <div>
                    <input style={{
                        position: "absolute",
                        top: "px",
                        left: "px",
                    }} type="checkbox" />
                </div>
                <label style={{
                    position: "absolute",
                    top: "10px",
                    right: "85px",
                    color: "black"
                }}>Kedd </label>
                <label style={{
                    position: "absolute",
                    top: "80px",
                    color: "black"
                }}>Reggeli </label>
                <label style={{
                    position: "absolute",
                    top: "160px",
                    color: "black"
                }}>Ebéd </label>
                <label style={{
                    position: "absolute",
                    top: "240px",
                    color: "black"
                }}>Vacsora </label>
            </Card>


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
            }}>
                <div>
                    <input style={{
                        position: "absolute",
                        top: "px",
                        left: "px",
                    }} type="checkbox" />
                </div>
                <label style={{
                    position: "absolute",
                    top: "10px",
                    right: "85px",
                    color: "black"
                }}>Szerda </label>
                <label style={{
                    position: "absolute",
                    top: "80px",
                    color: "black"
                }}>Reggeli </label>
                <label style={{
                    position: "absolute",
                    top: "160px",
                    color: "black"
                }}>Ebéd </label>
                <label style={{
                    position: "absolute",
                    top: "240px",
                    color: "black"
                }}>Vacsora </label>
            </Card>

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
            }}>
                 <div>
                    <input style={{
                        position: "absolute",
                        top: "px",
                        left: "px",                                               
                    }} type="checkbox" />
                </div>
                <label style={{
                    position: "absolute",
                    top: "10px",
                    right: "70px",
                    color: "black"
                }}>Csütörtök </label>
                <label style={{
                    position: "absolute",
                    top: "80px",
                    color: "black"
                }}>Reggeli </label>
                <label style={{
                    position: "absolute",
                    top: "160px",
                    color: "black"
                }}>Ebéd </label>
                <label style={{
                    position: "absolute",
                    top: "240px",
                    color: "black"
                }}>Vacsora </label>
            </Card>


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
            }}>
                 <div>
                    <input style={{
                        position: "absolute",
                        top: "px",
                        left: "px",                                               
                    }} type="checkbox" />
                </div>
                <label style={{
                    position: "absolute",
                    top: "10px",
                    right: "80px",
                    color: "black"
                }}>Péntek </label>
                <label style={{
                    position: "absolute",
                    top: "80px",
                    color: "black"
                }}>Reggeli </label>
                <label style={{
                    position: "absolute",
                    top: "160px",
                    color: "black"
                }}>Ebéd </label>
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
                    top: "81%",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    width: "120px",
                    height: "60px",
                    fontSize: "18px",
                    boxShadow: "2px 2px 5px"
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
                }}>Csabás Csaba</label>
            </div>


        </form>
    )

}