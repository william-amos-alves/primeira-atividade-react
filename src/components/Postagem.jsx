
import "./Postagem.css";

function Postagem(props){
    
    return(
        <section className="postagem">
        <h3> {props.titulo} </h3>
        <p>{props.desc}</p>
        <img src={props.linkImagem} alt={props.legenda} />
    </section>


    );
}




export default Postagem;