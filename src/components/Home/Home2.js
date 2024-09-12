import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/MM-dreymoe-C.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Muritadhor, and I am a passionate software engineer with a deep love for
              <span className="purple"> problem-solving and innovation</span>. My journey into tech
              started with a drive to solve real-world problems, and I've never looked back.
              <br />
              <br />I am proficient in technologies like
              <i>
                <b className="purple"> C programming, Python, JavaScript, MySQL, MongoDB, ReactJS, Flask, Django, Jinja, and HTML/CSS.</b>
              </i>
              <br />
              <br />
              I'm particularly interested in leveraging technology in <b className="purple">Agriculture</b> to create solutions that can
              improve <b className="purple">food security</b> across Africa and the globe. 
              <br />
              <br />
              I am constantly learning, improving my skills, and exploring how <b className="purple">blockchain</b> can play a role in solving modern challenges. 
              I also have a growing interest in writing <b className="purple">smart contracts</b> for decentralized applications.
              <br />
              <br />
              Whether it's building robust backends with <b className="purple">Python</b> and frameworks like 
              <i>
                <b className="purple"> Flask and Django</b>
              </i>, or collaborating with a team of problem-solvers, I'm always ready to tackle the next challenge.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid profile-picture" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Armolas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/armolas_06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arowolomuritadhor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/armolas_06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Home2;
