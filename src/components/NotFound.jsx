import { Button, NavLink } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Home from './Home';

function Notfound(){
    return(
        <main>
            <h1>Página não encontrada. 404.</h1>
            <Button  variant="secondary" NavLink href="/"> 
                Volta para Inicio
            </Button>
        </main>
        
    );
}

export default Notfound;