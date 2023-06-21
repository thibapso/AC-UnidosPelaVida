import Carousel from "react-bootstrap/Carousel";
import carrossel1 from "../assets/carrossel1.jpg";
import carrossel2 from "../assets/carrossel2.jpg";
import carrossel3 from "../assets/carrossel3.jpg";

function Carrossel() {
  return (
    <Carousel variant="lite">
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel1} alt="First slide" />
        <Carousel.Caption>
          <h5 class="dicas">DISQUE 190!</h5>
          <p class="info">O feminicídio mata</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel2} alt="Second slide" />
        <Carousel.Caption>
          <h5 class="dicas">NÃO SE CALE!</h5>
          <p class="info">A sua vida importa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel3} alt="Third slide" />
        <Carousel.Caption>
          <h5 class="dicas">VEJA OS DADOS!</h5>
          <p class="info">O crime contra a mulher está em crescimento</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;