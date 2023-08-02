import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaCloud } from "react-icons/fa";
import {
  SiFirebase,
  SiNextdotjs,
  SiNestjs,
  SiMysql,
  SiWebrtc,
  SiExpress,
  SiSpring,
  SiTailwindcss,
  SiSass,
  SiHibernate,
  SiSqlite,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiSass />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebrtc />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
