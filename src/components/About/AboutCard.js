import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />Soy desarrollador FrontEnd actualmente trabajando en Exis Ti para VEIASA como cliente
            <br />
            <br />
            A parte de programar me gusta
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar a videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacer deporte
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
