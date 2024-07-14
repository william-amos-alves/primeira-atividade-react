import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";


function Cadastro(){

    const{register, handleSubmit, formState:{errors} } = useForm();

    function cadastrar(data){
        console.log("Cadastro!");
        console.log(data);
    }
    
    return(
        <main className="mt-4">
            <form className="form-section cadastro" onSubmit={handleSubmit(cadastrar)}>
                <h1>Cadastro</h1>
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
                    <label htmlFor="date">Data de Nascimento</label>
                    <input 
                    type="date"  
                    id="date" 
                    className="form-control"
                    {...register("date", {required:true})}
                     />
                     {errors.email && <small className="invalid">A data de Nascimento é inválida! </small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                    type="password" 
                    id="senha" 
                    className="form-control"
                    {...register("senha", {required: true, minLength:6})}
                    />
                    {errors.senha && <small className="invalid"> Senha inválido! </small>}
                </div>
                <Button variant="primary" className="mt-1 w-100" type="submit" >
                    Cadrastar
                </Button>
            </form>
        </main>
    );
}

export default Cadastro;