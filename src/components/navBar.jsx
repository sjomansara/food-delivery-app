import { forwardRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Container, Col, Dropdown } from 'react-bootstrap';

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  <FontAwesomeIcon className="custom-toggle" icon={faChevronDown} id="arrow-down"href=""
  ref={ref}
  onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}>
    {children}
    &#x25bc;
  </FontAwesomeIcon>
));

const MyNavbar = () => {
    return (
        <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src="images/verydeli4.png"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title={<div>Account <CustomToggle /></div>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="#home"><FontAwesomeIcon icon={faBagShopping} id="arrow-down" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default MyNavbar;
  