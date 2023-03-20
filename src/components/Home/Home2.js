import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Aboutcard from "../About/AboutCard";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Déjame explicarte un poco<span className="purple"> sobre MI  </span>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      
        <h1 className="project-heading">
          Principales <strong className="purple">Skills </strong>
        </h1>

        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Herramientas que</strong> he usado/uso
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}
export default Home2;
