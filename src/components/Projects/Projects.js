import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import nttdata from "../../Assets/nttdata.png";
import allfunds from "../../Assets/allfunds.png";
import exis from "../../Assets/exis.png";
import junta from "../../Assets/junta.png";
import ProjectCard from "./ProjectCards";
import ProjectCard1 from "./ProjectCard1";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis proyectos<strong className="purple"> en el trabajo </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={nttdata}
              title="FullStack Developer"
              description="Llevaba a cabo tareas de análisis y desarrollos en el equipo de CID. A su vez tambíen creaba, modificaba y eliminaba colecciones en BBDD. Analizaba previamente las tareas para poder desarrollarlo y una vez desarrollado comprobar el despliegue en los diferentes portales. Las tecnologías que usaba eran: React.JS, Node.JS, MongoDB (como gestor de BBDD) y Docker (para despliegue de los contenedores)"
              imgUnder={allfunds}
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard1
              imgPath={exis}
              title="FrontEnd Developer"
              description="Llevo a cabo el mantenimiento y diseño frontal de diferentes portales. También me encargo de crear nuevos componentes para el mejor funcionamiento de la web creando así un diseño óptimo para el cliente. Analizo las tareas antes de desarrollar y una vez desarrollado despliego en los diferentes portales comprobando a su vez el funcionamiento correcto del código aplicado. La tecnología que utilizo es React.JS principalmente aunque también tengo un ligero conocimiento de Python para la parte del back"
              imgUnder={junta}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
