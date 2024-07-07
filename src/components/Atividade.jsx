import "./Atividade.css";
import logo from "../../public/images/logo-acai.jpg";

function Atividade(props){
    function handleClick() {
        alert('Seja! Bem-vindo!');
      }

    return(
        <main>
        
            <section className="cabecalho">
                <a className="login">{props.logado 
                ? `Bem-vindo(a) ${props.nomeUsuario}`
                : "Você está desconectado!"}</a>
                <a className="link" href="#"> Inicio</a>
                <a className="link" href="#">Cardápio</a>
                <a className="link" href="#">Contato</a>
                <button className="botao" onClick={handleClick}>
                    Entrar
                </button>
            </section>
            <section>
                <img src={logo} alt="imagem do Açai" width= "100%" height="500px"/>
            </section>
        </main>

    );

}

export default Atividade;