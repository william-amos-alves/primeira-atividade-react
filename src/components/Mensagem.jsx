
import "./Mensagem.css";

// Exercício: Aplicar props ao componente Mensagem, as propriedades são: 
// textoTitulo, nomeAutor, paragrafo e linkImagem. 
// Adapte o componente para receber props.
// Até 12h

function Mensagem(){
    const textoTitulo = "Blog";
    const nomeAutor = "J. Almir";
    const linkImagem = "https://picsum.photos/200";

    return(
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{textoTitulo.toUpperCase()}</h2>
            <img src={linkImagem} alt="Imagem da mensagem"/>
            <small>Nome do autor:{nomeAutor} </small>
            <p className="paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cum?</p>
        </section>
    );
}

export default Mensagem;