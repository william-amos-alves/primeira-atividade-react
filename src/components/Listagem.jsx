/*import CardAluno from "./CardAluno";*/

const compras = [
    "Batata palha","Batata frita pronta","Batata doce","Batata Chips","Batata Inglesa"
];

const produtos = [
    {cod: 1, nome: "Batata palha", quantidade: 300, precoUnitario: 5},
    {cod: 2, nome: "Batata frita pronta", quantidade: 100, precoUnitario: 20},
    {cod: 3, nome: "Batata doce", quantidade: 150, precoUnitario: 10},
    {cod: 4, nome: "Batata Chips", quantidade: 10, precoUnitario: 2},
];


const alunos =  [
    {mat: 1, nome: "William", serie: "5º", media: 5.0},
    {mat: 2, nome: "Bruno", serie: "6º", media: 6.0},
    {mat: 3, nome: "Wendel", serie: "7º", media: 7.0},
    {mat: 4, nome: "Jhonatan", serie: "8º", media: 8.0},
];





// Gerar componentes/elementos a partir de dados (array)
function Listagem(){
    // Cada string no array de compras está sendo transformada
    // em um  array de <li>
    const itenscompra = compras.map((compra, index) => {
        return <li key = {index}>{compra}</li>
    });

    // o KEY é importante para que o React saiba remover
    // ou adicionar o elemento na tela corretamente
    const cardsProduto = produtos.map((produto) =>{
        return(
            <article key = {produto.cod}>
                <h3>{produto.nome}</h3>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
         
       
        );
    });

 
         const cardsAluno = alunos.map((aluno) => {
            return <CardAluno key={aluno.mat} nome={aluno.nome} serie={aluno.serie} media={aluno.media} />
    }); 
   

    return(
        <>
            <h2>Lista de Compras</h2>
            <ul>{itenscompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>{cardsProduto}</section>
            <hr />
            <h2>Lista de Alunos</h2>
            <section>{cardsAluno}</section> 
          
        
        </>
    );
}

export default Listagem;