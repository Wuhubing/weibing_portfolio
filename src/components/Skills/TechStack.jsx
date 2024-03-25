import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tilt } from 'react-tilt'; // 修改这里

function TechStack({ techs }) {
  return (
    <Row className="justify-content-center">
      {techs.map((tech, index) => (
        <Col key={index} xs={6} sm={4} md={3} className="tech-icons">
          <Tilt options={{ max : 25 }}>
            <img src={tech.img} alt={tech.name} style={{ maxWidth: "100px", maxHeight: "100px" }}/>
          </Tilt>
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;