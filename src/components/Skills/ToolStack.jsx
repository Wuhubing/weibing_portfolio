import React from "react";
import { Col, Row } from "react-bootstrap";

function ToolStack() {
    const defaultImg = process.env.PUBLIC_URL + '/uwmadison.jpg'; // 统一的备用图片路径
    return (
        <Row className="justify-content-center">
            <Col xs={6} sm={4} md={2} className="tech-icons">
                <img src={defaultImg} style={{maxWidth: "100px", maxHeight: "100px"}} title="MySQL" alt="MySQL"/>
            </Col>
            <Col xs={6} sm={4} md={2} className="tech-icons">
                <img src={defaultImg} style={{maxWidth: "100px", maxHeight: "100px"}} title="MySQL" alt="MySQL"/>
            </Col>
            <Col xs={6} sm={4} md={2} className="tech-icons">
                <img src={defaultImg} style={{maxWidth: "100px", maxHeight: "100px"}} title="MySQL" alt="MySQL"/>
            </Col>
            <Col xs={6} sm={4} md={2} className="tech-icons">
                <img src={defaultImg} style={{maxWidth: "100px", maxHeight: "100px"}} title="MySQL" alt="MySQL"/>
            </Col>
            <Col xs={6} sm={4} md={2} className="tech-icons">
                <img src={defaultImg} style={{maxWidth: "100px", maxHeight: "100px"}} title="MySQL" alt="MySQL"/>
            </Col>
        </Row>
    );
}

export default ToolStack;

