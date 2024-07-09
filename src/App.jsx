
import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";
import Listagem from "./components/Listagem";
import CardAluno from "./components/CardAluno";
import Banner from "./components/Banner";
import Atividade from "./components/Atividade";
import Galeria from "./components/Galeria";
import Eventos from "./components/Eventos";
import Contador from "./components/Contador";
import Abas from "./components/Abas";
import Carrossel from "./components/Carrossel";
import CalculadoraIMC from "./components/CalculadoraIMC";
import Post from "./components/Post";
import Converso from "./components/Converso";

function App(){
   return(
    <>
       {/* <Contador valorInicial ={20}/>
        <Contador valorInicial ={0}/>
        <Contador valorInicial ={1000}/>
        <Contador /> */}
        {/* <Abas /> */}
         {/*<CalculadoraIMC /> */}
         <Post />
         <Converso />
    </>
   );
}

export default App;