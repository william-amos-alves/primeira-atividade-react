import { useState } from "react";
import "./Contador.css";

// Podemos definir um valor padrão para as props
function Contador({valorInicial = 0,}){
    // Para definir um estado usamos: (useState);
    // useState -> estado, função para altera este estado
    // useState -> react hooks
    const [numero, setNumero] = useState(valorInicial);


    function handleIncremento(){
        // Indica ao componente que ele deve "atualizar", para corresponder a mundaça do estado
        // definimos no useState o valor inicial do estado
        setNumero(numero + 1);
        console.log("Evento incremento:", numero);
    }
    // Implementa o decremento
    function handleDecremento(){
        if(numero > 0){
            setNumero(numero - 1);
        }
    }
    function handleIncremento100(){
        setNumero(numero +100);
    }
    function handleZerar(){
        setNumero(0); // numero = 0
    }

    return(
        <section>
            <h2 className={numero % 2 === 0? "par":"impar"}>Contagem:{numero}</h2>
            <button onClick={handleIncremento}>+1</button>
            <button onClick={handleDecremento}>-1</button>
            <button onClick={handleIncremento100}>+100</button>
            <button onClick={handleZerar}>Zerar</button>
           

        </section>
    );

}

export default Contador;

// Para que o número mude, o compoenete precisa
// renderizar novamente. Para fazer isso:
// Estado -> variavel especial que sincronizar as mundaças na tela