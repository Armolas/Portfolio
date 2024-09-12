import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
//import iamready from "../../Assets/Projects/iamready.png"
//import tutorplan from "../../Assets/Projects/tutorplan.png"
import cinemart from "../../Assets/Projects/Cinemart.png"
import quickassist from "../../Assets/Projects/QuickAssist.png"
import hbnb from "../../Assets/Projects/hbnb.png"
import shell from "../../Assets/Projects/shell.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've recently worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickassist}
              isBlog={false}
              title="QuickAssist"
              description="Quick Assist is a service delivery app that connects individuals needing services like cleaning, laundry, cooking, babysitting, and grocery shopping with service providers who offer these services for quick pay."
              ghLink="https://github.com/Armolas/QuickAssist"
              demoLink="https://drive.google.com/file/d/1qhi_Fc8tlGqmOGbghEb4qSPNHl7S8z94/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemart}
              isBlog={false}
              title="Cinemart"
              description="Cinemart is a movie ticketing platform where users can view movie showtimes across different cinemas and conveniently book their tickets."
              ghLink="https://github.com/ObamtechNetworks/Movie-Ticketing-Platform"
              demoLink="https://cinemart.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hbnb}
              isBlog={false}
              title="AirBnB Clone"
              description="A simplified clone of AirBnB that allows users to filter available accommodations by location and amenities."
              ghLink="https://github.com/Y4h14/AirBnB_clone_v4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              isBlog={false}
              title="Simple Shell"
              description="A custom shell that mimics basic bash shell functionalities, allowing users to execute commands and navigate directories."
              ghLink="https://github.com/Armolas/simple_shell"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}


export default Projects;
