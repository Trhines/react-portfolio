import React from 'react'
import  { Navbar, Nav } from 'react-bootstrap'
import './index.css'
const NavComponent = () => {
    return(
        <Navbar>
            <Nav>
                <Nav.Link href="https://github.com/trhines">Github</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/trenton-rhines-8060ab1b8">Linked In</Nav.Link>
                <Nav.Link href="src/components/navBar/Resume.pdf">Resume</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavComponent