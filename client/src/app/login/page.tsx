

import LoginForm from '@/components/login/LoginForm'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'

export default function login() {

  return (
    <div style={{
      position: "absolute", top: ".5rem", right: ".5rem",
      background: "gray",
      border: "1px solid black",
      padding: "1rem",
      margin: "5rem",
      borderRadius: ".5rem",



    }}>
      <Row
        className='mt-10 pt-5 d-flex justify-content-center align-items-center'
      >
        <Col xs={10} md={5} lg={10} className='pb-4 pb-md-2'>
          <h2>Jelentekezzen be!</h2>
        </Col>


        <Col xs={10} md={5} lg={10}>

          <LoginForm />


          <Col xs={10} md={5} lg={10} className='pb-4 pb-md-2'>

          </Col>






        </Col>
        <Col xs={10} md={10} lg={10} className='pb-4 pb-md-2'>
        
          <h2>Még nincs fiókja? <Link href="/register">Regisztráljon</Link></h2>
        </Col>
      </Row>
    </div>

  )
}
