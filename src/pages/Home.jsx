import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import Carrossel from "../components/Carrossel";
import Descubra from "../components/Descubra";
import Footer from "../components/Footer";

import "../App.css";

function Home() {
  return (
    <div calss="cabecalho">
      <Cabecalho />
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
          <div className="home">
            <h1 class="h1-home">ACOMPANHE OS DADOS!</h1>
            <p class="p-home">Veja os casos de feminícdio através dos gráficos</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center taxas">
            <Descubra titulo="Menores de 18 anos" paragrafo="Descubra quantas mulheres menores de 18 anos são vítimas de feminicídio nos anos de 2015 até 2022" descubra="src\assets\menoresidade.jpg" />
          
            <Descubra titulo="Taxas por cidade" paragrafo="Descubra as cidades com maior taxa de feminicídio nos anos de 2015 até 2022" descubra="src\assets\taxascidade.jpg" />
          
            <Descubra titulo="Meses mais perigosos" paragrafo="Descubra os meses com maior taxa de feminicídio nos anos de 2015 até 2022" descubra="src\assets\meses.jpg" />
          
            <Descubra titulo="Mulheres trans também sofrem" paragrafo="Descubra a taxa de mulheres trans mortas nos anos de 2015 até 2022" descubra="src\assets\trans.jpg" />

            <Descubra titulo="Piores anos" paragrafo="Descubra quais são os anos com mais casos de feminicídio entre 2015 até 2022" descubra="src\assets\anos.jpg" />
          </div>
          <div><br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
