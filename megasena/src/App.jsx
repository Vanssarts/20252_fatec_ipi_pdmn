import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Bolinhas from "./Bolinhas.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Megasena() {
  const [numeros, setNumeros] = useState([]);

  const gerarNumeros = () => {
    const sorteados = [];

    while (sorteados.length < 6) {
      const n = Math.floor(Math.random() * 60) + 1;
      if (!sorteados.includes(n)) {
        sorteados.push(n);
      }
    }

    sorteados.sort((a,b) => a-b);
    setNumeros(sorteados);
  };

  return (
    <Container className="text-center mt-4">
      <Row className="mb-3">
        <Col><h2>Mega Sena</h2></Col>
      </Row>

      {numeros.length > 0 && (
        <Row className="mb-3 justify-content-center">
          {numeros.map((num) => (
            <Col xs="auto">
              <div style={Bolinhas}>{num}</div>
            </Col>
          ))}
        </Row>
      )}

      <Row>
        <Col className="d-flex justify-content-center">
          <Button onClick={gerarNumeros}>
            Gerar jogo
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Megasena;
