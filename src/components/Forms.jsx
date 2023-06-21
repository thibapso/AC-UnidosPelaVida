import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Endereço de e-mail:</Form.Label>
        <Form.Control type="email" placeholder="thiago@exemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentário:</Form.Label>
        <Form.Control as="textarea" rows={3} /><br/>
        <Button variant="primary">Enviar!</Button>
      </Form.Group>
    </Form>
  );
}

export default Forms;