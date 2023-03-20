import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{color:"white"}}>
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
