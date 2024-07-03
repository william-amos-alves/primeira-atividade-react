import "./Blog.css";
import Postagem from "./Postagem";


function Blog() {
    return (
        <section className="blog">
            <h2>Postagens do dia</h2>
            <Postagem titulo="React é muito top" desc="Descrição da postagem 1" linkImagem="https://picsum.photos/200"/>
            <Postagem titulo="Css é muito top" desc="Descrição da postagem 2" linkImagem="https://picsum.photos/200"/>
            <Postagem titulo="Js é muito top" desc="Descrição da postagem 3" linkImagem="https://picsum.photos/200"/>
        </section>
    );
}

export default Blog;