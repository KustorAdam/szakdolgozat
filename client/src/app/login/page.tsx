

import LoginForm from '@/components/login/LoginForm'
import Link from 'next/link'
import { Col, FormGroup, Row } from 'react-bootstrap'
import { CgEnter } from 'react-icons/cg'

export default function login() {

  return (
    <div style={{
      position: "absolute", top: ".5rem", right: ".5rem",
      background: "#AFD8F7",
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


        

          </Col>






        






        <Col xs={10} md={10} lg={10} className='pb-4 pb-md-2'>


          <h2 style={{
            fontSize: 17,
            textAlign: 'center'


          }}>Még nincs fiókja? <Link href="/register">Regisztráljon</Link></h2>


        </Col>



      </Row>
    </div>

  )
}
