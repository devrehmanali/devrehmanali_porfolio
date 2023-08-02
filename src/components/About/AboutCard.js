import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rehman Ali </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am a Senior Software Engineer with a trade of dynamic skills
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Programming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never feel defeated, for every setback is a stepping stone towards
            victory!"{" "}
          </p>
          <footer className="blockquote-footer">Rehman Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
