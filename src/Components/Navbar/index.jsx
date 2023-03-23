import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./style.css"

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="md" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>
          <Nav className="me-auto w-100 d-flex justify-content-center">
            <Nav.Link href="/" className='navLink'>Home</Nav.Link>
            <Nav.Link href="/get-inspired" className='navLink'>Get Inspired</Nav.Link>
            <Nav.Link href="/play" className='navLink'>Play</Nav.Link>
            <Nav.Link href="/leaderboard" className='navLink'>Leaderboard</Nav.Link>
            <Nav.Link href="/about" className='navLink'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
