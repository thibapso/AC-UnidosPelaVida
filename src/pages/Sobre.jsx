import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import Descubra from "../components/Descubra";
import Footer from "../components/Footer";
import "../App.css";

function Sobre() {
  return (
    <div>
      <Cabecalho />
      <div>
        <NavProjeto />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center taxas">
      <Descubra titulo="Sobre o Unidos Pela Vida" paragrafo="O site contra o feminicídio foi desenvolvido utilizando a biblioteca React, durante um dia de aula em meu terceiro ano do ensino médio técnico na FIAP School." descubra="src\assets\sobrefundo.jpg" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Sobre;
