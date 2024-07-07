
import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";
import Listagem from "./components/Listagem";
import CardAluno from "./components/CardAluno";
import Banner from "./components/Banner";
import Atividade from "./components/Atividade";
import Galeria from "./components/Galeria";

function App(){
   return(
    <>
      { /* <Mensagem
        textoTitulo="As batatas quando nascem se esparramam pelo chão"
        nomeAutor="J. Almir"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        linkImagem="https://picsum.photos/200"
      />
      <Mensagem
        textoTitulo="As batatas quando nascem se esparramam pelo chão"
        nomeAutor="J. Almir"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        linkImagem="https://picsum.photos/200"
      /> */}
        {/*<Navbar logado={true} nomeUsuario="William"/>
        <Blog />*/}
         {/*<Listagem />
          <CardAluno />*/}
         {/* <Banner /> */}
         <Atividade logado={true} nomeUsuario="William"/>
         <Galeria />
         <Rodape  texto= " ©Desenvolvido por William Alves Todos os direitos reservados"/>
    </>
   );
}

export default App;