// Eventos = são ações que acontencem na interface, podem ser
// provocados pelo usúario.
// Manipulador de evento (handler) => é uma resposta ao evento

function Eventos(){

    // Manipulador de eventos
    function handleClick(){
        alert("Você clicou!");
    }


    return (
        <section>
            <button onClick ={handleClick}>Clique aqui</button>
            <button onClick={() => alert("Clicou nomavamente")}>Clique novamente</button>
            <h1 onMouseEnter={() => alert("Olá!")}>Titulo</h1>
        </section>
    );
}

export default Eventos;