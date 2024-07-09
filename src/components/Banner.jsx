import "./Banner.css";
import imagem from "../assets/imagem1.jpg";

function Banner(){
    return(
        <section>
            <img src= {imagem} alt="banner" width = "240" />
            <img src="/vite.svg" alt="Logo do vite" />
            <img src="/images/imagem1.jpg" alt="banner" width = "240"/>
            <section className="fundo-imagem">
                Lorem ipsum dolor sit amet.
            </section>
            <button>Clique aqui</button>
        </section>
    );

}
    

export default Banner;