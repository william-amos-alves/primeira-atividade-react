import { useState } from "react";
import "./Abas.css";


function Abas() {
    
    const [aba, setAba] = useState("Impacto Social");

    return (
        <section>
           <div className="botoes">
                <button className={aba === "Impacto Social" ? "ativo":""} onClick={() => setAba("Impacto Social")}>Impacto Social</button>
                <button className={aba === "Embregabilidade" ? "ativo":""} onClick={() => setAba("Empregabilidade")}>Empregabilidade</button>
                <button className={aba === "tecnológico" ? "ativo":""} onClick={() => setAba("Tecnológico")}>Tecnológico</button>
           </div>
            <br />
            {aba === "Impacto Social" && 
            <section>
                <h2>Impacto Social</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, laborum?</p>
            </section>
            }
            {aba === "Empregabilidade" &&
            <section>
                <h2>Empregabilidade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam suscipit, dolore reprehenderit sapiente recusandae.</p>
            </section>
            }
            {aba === "Tecnológico" &&
             <section>
                <h2>Tecnológico</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, laborum?</p>
            </section>
            }
        </section>
    );
}


export default Abas;