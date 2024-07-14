import {
    Container,
    Accordion,
    Button,
    AccordionBody,
    AccordionHeader,
    Alert,
    AccordionItem,
  } from "react-bootstrap";
  
  function Ajuda() {
    return (
      <main className="mt-4 ajuda">
        <Container>
          <h1>Ajuda</h1>
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventkly="0">
              <Accordion.Header> Sobre o nosso sistema </Accordion.Header>
              <Accordion.Body>
                O açai é um sistema para gerenciamento de pedidos pessoais. Nesta
                aplicação você pode gerenciar todos os seus pedidos de compras.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" />
            <Accordion.Header>Sobre a Empresa</Accordion.Header>
            <Accordion.Body>
              Essa empresa envolve soluções focadas em produtividade e bem-estar para o cliente sair muito
              satisfeito.
            </Accordion.Body>
            <Accordion.Item eventkly="2">
              <Accordion.Header> Contato</Accordion.Header>
              <Accordion.Body>
                <p>Contato: (81) 99666-1111</p>
                <p>E-mail: pontosacai@gmail.com</p>
                <p>Endereço: Avenida Conselheiro Rosa e Silva 111, Aflitos - Recife</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button className="mt-1 mb-4 me-1">Entre em contato</Button>
          <Button className="mt-1 mb-4 me-1"  variant="danger">
            Denunciar
          </Button>
          <Alert className="m1-1" variant="warning">
            Atenção! Estamos sempre abertos para opiniões de melhorias.
          </Alert>
        </Container>
      </main>
    );
  }
  
  export default Ajuda;
  