import { Container } from "react-bootstrap";
import React from "react";



export default function Home() {
  return ( 
    <><><div style={{
      position: "absolute", bottom: "340px", left: "300px",
      background: "#AFD8F7",
      border: "1px solid black",
      padding: "8rem",
      margin: "1rem",
      borderRadius: "2rem",
      width: "820px",
      boxShadow: "2px 2px 5px"
    }}> <label style={{
      position: "absolute",
      right: "600px",
      fontSize: "35px",
      top: "120px"
    }}>Üdvözlünk Csabás Csaba!</label>
     </div>
    <div>
     <img src="./images/kep3.jpg" width={200} height={250} style={{
     
      position: "absolute",
      left: "960px",
      bottom: "100px",
      borderRadius: "900px",

      
      
     }}  alt="" />
 </div>
     <div style={{
      position: "absolute", top: "15rem", left: "965px",
      background: "white",
      border: "1px solid black",
      padding: "8rem",
      margin: "10rem",
      borderRadius: "2rem",
      width: "10px",
      height: "50px",
      boxShadow: "2px 2px 5px"
    }}>  </div>
    
    <div style={{
      position: "absolute", top: "15rem", left: "10rem",
      background: "#AFD8F7",
      border: "1px solid black",
      padding: "8rem",
      margin: "10rem",
      borderRadius: "2rem",
      width: "350px",
      height: "50px",
      boxShadow: "2px 2px 5px"
    }}><label style={{
      position: "absolute",
      top: "10px",
      right: "220px",
      color: "black",
      fontSize: "25px"
  }}>Mai étkezések </label>
  <label style={{
      position: "absolute",
      top: "80px",
      left: "20px",
      color: "black"
  }}>Reggeli </label>
  <label style={{
      position: "absolute",
      top: "160px",
      left: "20px",
      color: "black"
  }}>Ebéd </label>
  <label style={{
      position: "absolute",
      top: "240px",
      left: "20px",
      color: "black"
  }}>Vacsora </label> </div></>

  
  <div style={{
      position: "absolute", top: "-20px", right: "", left: "0px",
      background: "#12427c",
      border: "1px solid black",
      padding: "50px",
      boxShadow: "2px 2px 5px",
      height: "px",
      width: "1379px"
      
    }}>
       
       </div>
       <label style={{
                position: "absolute",
                color: "black",
                right: "60px",
                top: "30px",
                fontSize: "20px"
            }}>Csabás Csaba</label> </>
  )
}