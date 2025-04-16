import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { Link } from "react-router-dom"

const Singup = () =>{
    return(
        <>
            <div className="bg-image mb-0">
                <Container className="container">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="s-color">//WLECOME TO OUR COMPANY</h6>
                                    <h1 className="font-weight-bold text-white" style={{fontSize:"60px"}}>Sing Up</h1>
                                </div>
                                <div>
                                    <Link to="/" className="border-end pe-2 text-light text-decoration-none">Home</Link>
                                    <span className="text-white">Register</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Singup