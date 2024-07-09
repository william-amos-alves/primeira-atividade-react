import { useState } from "react";

function Post() {
  const [curtir, setCurtir] = useState(false);

  const btnCurtir = () => {
    setCurtir(!curtir);
  };

  return (
    <section>
      <article>
        <h3>Poste</h3>
        <p>Estuda REACT na SOULCODE é muito bom!</p>
      </article>
      <div>
        <button onClick={btnCurtir}>{curtir ? "descurtir" : "curtir"}</button>
      </div>
      <br />
    </section>
  );
}

export default Post;
