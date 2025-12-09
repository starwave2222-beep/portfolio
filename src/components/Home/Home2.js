import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Senior Python Full Stack Engineer with <b className="purple">11+ years of experience</b> designing and building large-scale, high-performance platforms using
              <b className="purple">Python, Django, FastAPI, Node.js, and React/TypeScript</b>. Expert in <b className="purple">backend architecture, microservices, REST/GraphQL APIs,
              cloud-native infrastructure (AWS/Azure), and database optimization.</b>
              Proven track record in <b className="purple">scaling complex systems, automating workflows, improving reliability and performance</b>, and leading the
              implementation of <b className="purple">LLM/GenAI-powered features</b> to enhance user engagement. Strong experience in <b className="purple">DevOps, CI/CD pipelines,
              containerization (Docker/Kubernetes), and secure enterprise systems.</b> Collaborative technical leader with a history of mentoring
              teams, driving architecture decisions, and delivering measurable business impact.
            </p>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/taytaybear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matthew-chow-847b61109/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
