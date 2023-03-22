import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} style={{width: "200px", alignSelf: "center"}} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={props.imgUnder} alt="card-img" style={{width: "200px", alignSelf: "center"}} />
    </Card>
  );
}
export default ProjectCards;
