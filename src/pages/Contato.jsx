import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import Forms from "../components/Forms";
import "../App.css";

function Contato() {
  return (
    <div>
      <Cabecalho />
      <div>
        <NavProjeto />
      </div>
      <div>
        <Forms />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Contato;
