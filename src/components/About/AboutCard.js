import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muritadhor Arowolo</span>,
            currently based in <span className="purple">Lagos, Nigeria</span>.
            <br />
            I'm deeply passionate about <span className="purple">problem-solving</span> and 
            <span className="purple"> software engineering</span>, with a keen interest in 
            <span className="purple"> Blockchain Technology</span>.
            <br />
            I'm actively seeking opportunities for a <span className="purple">Software Engineering</span> role
            where I can contribute and grow.
            <br />
            I hold a Bachelor's Degree in <span className="purple">Agriculture (Animal Production)</span>, and I'm
            also exploring ways to combine technology with agriculture to create 
            <span className="purple"> AgriTech</span> solutions that can improve <span className="purple">food security</span>.
            <br />
            <br />
            Beyond coding, here are a few things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying and learning new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way we can justify our privileges is by doing hard things."
          </p>
          <footer className="blockquote-footer">Fred Swaniker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
