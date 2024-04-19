
import axios from 'axios'
import LoginForm from '@/components/login/LoginForm'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button, Col, FormGroup, Row } from 'react-bootstrap'
import { CgEnter } from 'react-icons/cg'
import { useEffect } from 'react'

export default function login() {
  //redirect("/menu")


  

  return (

    <><div>
      <img src="./images/kep1.jpg" width={1481} height={746} style={{

        position: "absolute",
        left: "0px",
        top: "0px"



      }} alt="" />
    </div><div style={{
      position: "absolute", top: "0.2rem", right: "12rem",
      background: "#AFD8F7",
      border: "1px solid black",
      padding: "1rem",
      margin: "10rem",
      borderRadius: ".5rem",
      boxShadow: "2px 2px 5px"
     
    }}>



        <Row

          className='mt-10 pt-5 d-flex justify-content-center align-items-center'
        >
          <Col xs={10} md={5} lg={10} className='pb-4 pb-md-2'>
            <h2 style={{
              textAlign: 'center'
            }}>Jelentekezzen be!</h2>
             
          </Col>


          <Col xs={10} md={5} lg={10}>

            <LoginForm />

          </Col>
          <Col xs={10} md={10} lg={10} className='pb-4 pb-md-2'>
         

            <h2 style={{
              fontSize: 17,
              textAlign: 'center'
            }}>Még nincs fiókja? <Link href="/register">Regisztráljon</Link></h2>

          </Col>
        </Row>

      </div></>

  )
}
