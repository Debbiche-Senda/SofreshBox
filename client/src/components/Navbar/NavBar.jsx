import "./navbar.css"
import { Container, Nav, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../components/img/soFreshBoxLogo.jpg"


const NavBar = () => {
    return (
        <div className='navBar' >
            <Navbar  bg="light" expand="lg">
  <Container className="navContainer">
    <Navbar.Brand href="#home">
      <Link to="/">
      <img src={logo} alt="logo" className="logoo"/>
      </Link>
      
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Link to="/" className='link' >Recette de la semaine</Link>
        <Link to="/concept" className='link'>Le concept</Link>
        
        {/* <NavDropdown title="Comment ça marche" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown> */}
        
        <Link to="/login" className='link'>
          Login
        </Link>
        <Link to="/signup" className='link' >
          Register
        </Link>
        
        <Link to="/mes-informations-persos" className='link'>Mon compte</Link>
        

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
          
        </div>
    )
}

export default NavBar
