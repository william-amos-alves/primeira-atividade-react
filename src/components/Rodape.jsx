
import "./Rodape.css";

function Rodape(props){

    return(
    <section>
        <br />
       <div className="rodape">
        {props.texto}
       </div>
    </section>
    );

}


export default Rodape;