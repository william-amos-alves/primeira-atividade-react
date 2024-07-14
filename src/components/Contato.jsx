import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";


function Contato(){

    const{register, handleSubmit, formState:{errors} } = useForm();

    function cadastrar(data){
        console.log("Cadastro!");
        console.log(data);
    }
    
    return(
        <main className="mt-4">
            <form className="form-section cadastro" onSubmit={handleSubmit(cadastrar)}>
                <h1>Contato</h1>
                <br />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                    type="text"
                    id="nome"
                    className="form-control"
                    {...register("nome", {required: true, maxLength:150})}
                      />
                      {errors.nome && <small className="invalid">O nome é inválido! </small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"  
                    id="email" 
                    className="form-control"
                    {...register("email", {required:true})}
                     />
                     {errors.email && <small className="invalid">O email é inválido! </small>}
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <input 
                    type="text"  
                    id="feedback" 
                    className="form-control"
                    {...register("feedback", {required:true})}
                     />
                     {errors.email && <small className="invalid">O Feedback é inválido! </small>}
                </div>
                <Button variant="primary" className="mt-1 w-100" type="submit" >
                    Cadrastar
                </Button>
            </form>
        </main>
    );
}

export default Contato;