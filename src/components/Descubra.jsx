import Card from "react-bootstrap/Card";

function Descubra({titulo, paragrafo, descubra}) {
  return (
    <>
      <Card className="descubra">
        <Card.Body className="descubra">
          <Card.Title className="descubra-titulo"> <h1 className="descubra-titulo"> {titulo} </h1> </Card.Title>
          <Card.Text className="descubra-texto"> {paragrafo} </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" className="tam-img" src={descubra} />
      </Card>
    </>
  );
}

export default Descubra;
