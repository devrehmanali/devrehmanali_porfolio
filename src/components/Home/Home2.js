import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I believe I've gained knowledge and developed a love for
              programming...
              <br />
              <br />I am highly skilled in
              <i>
                <b className="purple"> Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My areas of interest are developing new &nbsp;
              <i>
                <b className="purple">
                  products, and application-optimized solutions{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">BlockChain and Crypto Currency.</b>
              </i>
              <br />
              <br />
              I am a highly skilled software developer from Lahore, Pakistan.
              With expertise in Java, Javascript, and Python, I am well-equipped
              to tackle a wide range of programming challenges. My passion lies
              in developing new products and creating application-optimized
              solutions. Mostly i enjoy exploring emerging technologies,
              particularly in the areas of Blockchain and Crypto Currency. With
              a strong background in software development, I am dedicated to
              deliver high-quality, innovative solutions to meet the
              ever-changing needs of the industry.
              <br />
              <br />
              Whenever possible, mostly i spend my time with{" "}
              <b className="purple">Open source Projects</b> and in learning
              <i>
                <b className="purple"> Best Coding Practices</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/devrehmanali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rehmanali3332"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rehman-ali-673342177"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/rehman_a_li"
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
