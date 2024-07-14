import logo from "../../public/images/logo-acai.jpg"

function Home(){
    
    return(
        <main className="home">
            <h1>Home</h1>
            <div>
                <img className="home-logo" src={logo} alt="Imagem do Açai"/>
            </div>
        </main>
        
    );
}

export default Home;