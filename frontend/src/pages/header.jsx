import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSearch } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { CiSearch } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header = () =>{
    return(

        <>
            <Navbar expand="lg" className="bg-white" sticky='top' >
      <Container className="container">
        <Navbar.Brand href="#home" style={{}}>
        <a className="navbar-brand d-flex align-items-center" href="D:\React\ecom\src\App.jsx">
              <img src="https://broccoli-omega.vercel.app/_next/image?url=%2Fimg%2Flogo.png&w=384&q=75" alt="" className="img-fluid p-2 logo-img d-none d-lg-block" style={{ width: '130px', cursor: 'pointer' }} />
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-felx justify-content-center align-items-center text-white">
          <Nav className='m-auto'>
            <Link to="/" className="mx-3 px-2 py-2 text-black text-decoration-none fw-bold" >Home</Link>
            <Link to="/Product" className="mx-3 px-2 py-2 text-black text-decoration-none fw-bold">Product</Link>
            <Link to="/Shop" className="mx-3 px-2 py-2 text-black text-decoration-none fw-bold">Shop</Link>
            <Link to="/Aboutus" className="mx-3 px-2 py-2 text-black text-decoration-none fw-bold">About us</Link>
            <Link to="/Service" className="mx-3 px-2 py-2 text-black text-decoration-none fw-bold">Service</Link>
            <Link to="/Service" className="mx-3 px-2 py-2 text-white text-decoration-none fw-bold btn btn-success">GET A QUOTE</Link>
          </Nav>
        </Navbar.Collapse>
        <Row>
          <Col>
          <Dropdown>
              <Dropdown.Toggle variant="white" className=' btn btn-outline-success' id="dropdown-basic" align="start">
              <FaSearch className='my-2' />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
                  
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="btn btn-outline-success mx-1 singup">
          <span>
            <FaRegUser/>
            <div className="login_sub bg-white">
              <div className="d-flex flex-column text-start ">
                <Link className="p-3 border-bottom text-black text-decoration-none">
                    Sing in
                  </Link>
                <Link to="/Singup" className="p-3 border-bottom text-black text-decoration-none">
                  Sing up
                </Link>
                <Link className="p-3 border-bottom text-black text-decoration-none">
                  My Account
                </Link>
                </div>
            </div>
          </span>
          </Col>
          <Col className='btn btn btn-outline-success mx-1'>
          <BsCart3  />
          </Col>
          </Row>
      </Container>
    </Navbar>
        </>
    )
}

export default Header