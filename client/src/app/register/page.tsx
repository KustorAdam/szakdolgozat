
import { Button, Form, Row, Col, FormGroup } from "react-bootstrap";
import RegisterForm from '@/components/register/RegisterForm'
import Link from 'next/link'
export default function register() {
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
                    <h2>Regisztráció</h2>
                </Col>





                <Col xs={10} md={5} lg={10}>

                    <RegisterForm />




                </Col>








                <Col xs={10} md={10} lg={10} className='pb-4 pb-md-2'>


                    <h2 style={{
                        fontSize: 17,
                        textAlign: 'center'


                    }}>Már van fiókja? <Link href="/login">Jelentkezzen be!</Link></h2>


                </Col>



            </Row>
        </div>






    )

}