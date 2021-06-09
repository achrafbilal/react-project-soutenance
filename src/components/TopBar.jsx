import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom'



function TopBar({ auth, openSidebar, logout }) {

    const history = useHistory();
    const logoutHandler = () => {
        logout();
        window.location.href = "/login"

    }
    const Links = (auth) => {
        if (!auth.auth)
            return (
                <Container>

                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/login" exact >
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/register" exact >
                            Register
                </Nav.Link>
                    </Nav>
                </Container>
            )
        return (
            <Container>
                <Navbar.Brand onClick={() => openSidebar()} >
                    <Nav.Link as={Button} variant="dark"   >
                        <MenuIcon />
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/login" exact >
                        Servers
                    </Nav.Link>
                    <Nav.Link as={Button} onClick={() => logoutHandler()} to="/login" exact >
                        Logout
                    </Nav.Link>
                </Nav>

            </Container >
        )
    }
    return (
        <Navbar bg="dark" variant="dark" className="topbar">
            <Links auth={auth()} />
        </Navbar>
    )
}

export default TopBar
