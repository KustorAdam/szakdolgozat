
import { Button, Form, Row, Col, FormGroup } from "react-bootstrap";
import RegisterForm from '@/components/register/RegisterForm'
import Link from 'next/link'
export default function register() {
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
            boxShadow: "2px 2px 5px",
            width: "300px"
        }}>
                <Row
                    className='mt-10 pt-5 d-flex justify-content-center align-items-center'
                >
                    <Col xs={10} md={5} lg={10} className='pb-4 pb-md-2'>
                        <h2 style={{
                            textAlign: "center",
                        }}>Regisztráció</h2>
                    </Col>

                    <Col xs={10} md={5} lg={10}>

                        <RegisterForm />
                    </Col>
                    <Col xs={10} md={10} lg={10} className='pb-4 pb-md-2'>


                        <h2 style={{
                            fontSize: 17,
                            textAlign: 'center'
                        }}>Már van fiókja? <Link href="/">Jelentkezzen be!</Link></h2>


                    </Col>



                </Row>
            </div></>






    )

}