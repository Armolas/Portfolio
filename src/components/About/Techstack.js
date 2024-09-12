import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiSqlite,
  SiFlask,
  SiDjango,

  // SiSolidity,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="redis-name" style={{fontSize: "15px"}}>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="redis-name" style={{fontSize: "15px"}}>Nodejs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="redis-name" style={{fontSize: "15px"}}>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="redis-name" style={{fontSize: "15px"}}>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="redis-name" style={{fontSize: "15px"}}>Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <span className="redis-name" style={{fontSize: "15px"}}>Redis</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      {/* add a styling to the icon such that it display the name when hover */}
        <SiPostgresql/>
        <span className="redis-name" style={{fontSize: "15px"}}>PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className="redis-name" style={{fontSize: "15px"}}>Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <span className="redis-name" style={{fontSize: "15px"}}>Django</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <span className="redis-name" style={{fontSize: "15px"}}>SQLite</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <span className="redis-name" style={{fontSize: "15px"}}>Flask</span>
      </Col>
    </Row>
  );
}

export default Techstack;
