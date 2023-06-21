import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
      <Navbar bg="#ff52e8" variant="lite">
        <Container class="cabecalho" href="/">
            <h2 class="h2-cabecalho">PÁGINA INSTITUCIONAL - Thiago Baptista</h2>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho;