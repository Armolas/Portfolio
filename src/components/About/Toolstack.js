import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiRender,
  SiDiscord,
  SiVim,
  SiSwagger,
  SiWindows,
  SiMacos,
  SiLinux,
  SiGnubash
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <span className="redis-name" style={{fontSize: "15px"}}>MacOS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <span className="redis-name" style={{fontSize: "15px"}}>Linux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="redis-name" style={{fontSize: "15px"}}>VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="redis-name" style={{fontSize: "15px"}}>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <span className="redis-name" style={{fontSize: "15px"}}>Slack</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <span className="redis-name" style={{fontSize: "15px"}}>Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
        <span className="redis-name" style={{fontSize: "15px"}}>Render</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
        <span className="redis-name" style={{fontSize: "15px"}}>Discord</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
        <span className="redis-name" style={{fontSize: "15px"}}>Bash</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim />
        <span className="redis-name" style={{fontSize: "15px"}}>Vim</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <span className="redis-name" style={{fontSize: "15px"}}>Swagger</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <span className="redis-name" style={{fontSize: "15px"}}>Windows</span>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
