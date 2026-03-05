import { Container, Row, Col } from "react-bootstrap";


import LogoWeb from '../assets/img/LogoWeb.png'
import githubIcon from '../assets/img/githubIcon.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";



export const Footer = () => {
  const linkedInUrl = "https://www.linkedin.com/in/chayanikasinha10/";
  const githubUrl = "https://www.github.com/CSin007";

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={LogoWeb} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
