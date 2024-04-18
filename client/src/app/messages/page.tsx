'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap"



export default function messages() {
    return (
        

        <form>

        <div style={{
                position: "absolute", top: "110px", right: "", left: "17rem",
                background: "#12427c",
                border: "1px solid black",
                padding: "11rem",
                margin: "1rem",
                borderRadius: "30px",
                boxShadow: "2px 2px 5px",
                height: "230px",
                width: "600px",
            
            }}>
                 <Card style={{
                   
                   position: "absolute", top: "60px", right: "", left: "60px",
                   background: "white",              
                   padding: "1rem",            
                   width: "800px",
                   height: "450px"
               }}></Card>
                <h2 style={{
                    color:"white",
                    textAlign: "center",
                  marginTop: "-45%",
                    lineHeight: "10",                             
                }}>Üzenetek</h2>
           </div>

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