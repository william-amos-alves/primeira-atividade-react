
import "./Mensagem.css";

function Mensagem(props){
   
    return(
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{props.textoTitulo.toUpperCase()}</h2>
            <img src={props.linkImagem} alt="Imagem da mensagem"/>
            <small>Nome do autor:{props.nomeAutor} </small>
            <p className="paragrafo">{props.paragrafo}</p>
        </section>
    );
}

export default Mensagem;