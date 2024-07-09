import "./Atividade.css";
import logo2 from "../../public/images/logo2-acai.jpg";
import logo3 from "../../public/images/logo3.jpg";

const produtos = [
    {cod: 1, nome: "amendoim;",},
    {cod: 2, nome: "aveia;",},
    {cod: 3, nome: "farinha láctea;",},
    {cod: 4, nome: "flocos de arroz;",},
    {cod: 5, nome: "granola;",},
    {cod: 6, nome: "leite em pó;",},
    {cod: 7, nome: "paçoca;",},
    {cod: 8, nome: "sucrilhos;",},
];

function Galeria(){

    const cardsProduto = produtos.map((produto) =>{
    return(
        <article key={produto.cod}>
             <p> {produto.nome}</p>
        </article>
    );

});
 
    return(
        <> 
        <main className="card">
            <div>
            <h2 className="borda">LISTA DE CEREAIS</h2>
            <section>
                {cardsProduto}
            </section>
            </div>
           <section className="cards">
           <div>
                <img className="borda" src={logo3} alt="Imagem dos Tamanho" width="300"/>
                <p> Tamanho P</p>
                <p> R$ 10,00</p>
                <button className="botao-comprar">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                    Comprar
                </button>
            </div>
            <div>
                <img  className="borda" src={logo3} alt="Imagem dos Tamanho" width="300"/>
                <p> Tamanho M</p>
                <p> R$ 20,00</p>
                <button className="botao-comprar">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                    Comprar
                </button>
            </div>
            <div>
                <img className="borda" src={logo3} alt="Imagem dos Tamanho" width="300"/>
                <p> Tamanho G</p>
                <p> R$ 25,00</p>
                <button className="botao-comprar">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                    Comprar
                </button>
            </div>
            <div>
                <img  className="borda"src={logo3} alt="Imagem dos Tamanho" width="300"/>
                <p> Tamanho GG</p>
                <p> R$ 30,00</p>
                <button className="botao-comprar">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                    Comprar
                </button>
            </div>
           </section>
        </main>
        </>
    );
}

export default Galeria;