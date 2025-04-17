import { useState } from "react"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { Form, Link } from "react-router-dom"

const Singup = () =>{
    const [password,setpassword] = useState('')
    const [confirmpassword,setconfirmpassword] = useState('')
    const [Error,setError] = useState('')
    const [email,setemail] = useState('')
    return(
        <>
            <div className="bg-image">
                <Container className="container">
                    <Row>
                        <Col>
                            <Col className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="s-color">//WLECOME TO OUR COMPANY</h6>
                                    <h1 className="font-weight-bold text-white" style={{fontSize:"60px"}}>Sing Up</h1>
                                </div>
                                <div>
                                    <Link to="/" className="border-end pe-2 text-light text-decoration-none">Home</Link>
                                    <span className="text-white">Register</span>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="container text-center">
                <Row className="mb-2">
                    <Col>
                        <h1 className="fw-bold">Register 
                          <br/>  Your Account</h1>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <span className="fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Sit aliquid,Non distinctio vel iste.</span>
                    </Col>
                </Row>
            </Container>
            {/* <Container className="container text-center">
                <Form onSubmit={}>

                </Form>
            </Container> */}
        </>
    )
}
export default Singup