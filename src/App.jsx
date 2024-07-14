
import Menu from "../src/components/Menu";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Cadastro from "../src/components/Cadastro";
import Ajuda from "../src/components/Ajuda";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "../src/components/NotFound";
import Rodape from "../src/components/Rodape";
import Cardapio from "./components/Cardapio";
import Contato from "./components/Contato";

function App(){
   return(
    <>
      <BrowserRouter>
         <Menu/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/cardapio" element={<Cardapio/>} />
            <Route path="/ajuda" element={<Ajuda/>} />
            <Route path="*" element={<Notfound/>} />
         </Routes>
         <Rodape/>
      </BrowserRouter>
    </>
   );
}

export default App;