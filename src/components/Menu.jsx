import { Link } from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap";


function Menu(){

    return(
        <header className="menu-home">
              <Navbar className="inicio" expand="md">
                    <Container fluid>
                        <Link to= "/">
                            <span class="material-symbols-outlined icone-home">
                                home
                            </span>
                        </Link>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav>
                                <Link className="nav-link inicio" to="/login">Login</Link>
                                <Link  className="nav-link inicio" to="/cadastro">Cadastro</Link>
                                <Link className="nav-link inicio" to="/contato">Contato</Link>
                                <Link  className="nav-link inicio" to="/cardapio">Cardádio</Link>
                                <Link className="nav-link inicio" to="/ajuda">Ajuda</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>  
        </header>
    );
}

export default Menu;