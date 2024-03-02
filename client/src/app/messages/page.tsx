'use client';

import { useCookies } from "next-client-cookies";

import React from "react";
import { Form, Button, Container } from "react-bootstrap"



export default function messages() {
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
           



                <h2 style={{
                    color:"white",
                    textAlign: "center",
                    lineHeight: "10",               
                  
                    
                    
                }}>
                    Üzenetek</h2>
          
        </div>
    </form>








    )
   
}