import {Button, Container , Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export function Navbar(){
    return <NavbarBs sticky = 'top'className='bg-white shadow-sm nb-3'>
        <Container>
        <Nav>
            <Nav.Link to ="/" as ={NavLink}>
            Wongnai
            </Nav.Link>
        </Nav>
        </Container>
        </NavbarBs>
}