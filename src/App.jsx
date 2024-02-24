//import logo from './logo.svg';
import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <React.Fragment>
      
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <h4>Luxury Cars</h4>
      <div className="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="imgcard"
            //variant="top"
            src="assets\bmw.jpg"  alt="bmw" />
          <Card.Body>
            <Card.Title>BMW</Card.Title>
            <Button variant="primary">See details</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
          <Card.Img className="imgcard"

            variant="top"
            src="assets\range.webp" />
          <Card.Body>
            <Card.Title>Range Rover</Card.Title>
            <Button variant="primary">See details</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
          <Card.Img className="imgcard"
            variant="top"
            src="assets\classe g.jpg" />
          <Card.Body>
            <Card.Title>Mercedes classe G</Card.Title>
            <Button variant="primary">See details</Button>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}
export default App;
