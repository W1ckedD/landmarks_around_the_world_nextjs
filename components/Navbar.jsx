import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <img src="/icon-192x192.png" alt="home" width={50} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li>
              <a className="nav-link">
                <Link href="/">Home</Link>
              </a>
            </li>
            <li>
              <a className="nav-link">
                <Link href="/locations">Landmarks</Link>
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
