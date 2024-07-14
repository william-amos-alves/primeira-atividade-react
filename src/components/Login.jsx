import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function entrar(data) {
    console.log(data);
  }

  return (
    <main className="mt-4" >
      <form className="form-section login" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid"> {errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: { valor: 6, message: "Mínimo de 6 caracteres." },
            })}
          />
          {errors.senha && (
            <small className="invalid">{errors.senha.message} </small>
          )}
        </div>
        <Button variant="primary" className="mt-1 w-100" type="submit">
          Entrar
        </Button>
      </form>
    </main>
  );
}

export default Login;
