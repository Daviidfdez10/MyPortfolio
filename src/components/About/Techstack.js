import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
