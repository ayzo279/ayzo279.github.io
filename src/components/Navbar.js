import { Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect } from "react";

import resume from '../assets/img/Zhuo, Andy - Resume.pdf'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const ActivateLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <div className="branding">
                <Navbar.Brand href="#home" className="main-brand">
                    ANDY ZHUO
                </Navbar.Brand>
                <Navbar.Brand className="brand-vl">
                </Navbar.Brand>
                <Navbar.Brand className="sub-brand">
                    Harvard CS
                </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => ActivateLink('home')}>home</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => ActivateLink('projects')}>projects</Nav.Link>
                <Nav.Link href={resume} className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => ActivateLink('resume')} download>resume</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}