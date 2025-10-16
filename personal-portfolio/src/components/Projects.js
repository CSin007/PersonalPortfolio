import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Burnout Buddy",
      description: "An AI-powered wellness app that helps software engineers detect and prevent burnout using Gemini, Fitbit, and fun interventions.",
      imgUrl: projImg5,
      link: "https://devpost.com/software/burnoutbuddy",
      techStack: ["React", "Charts.js", "Github API", "Flask", "Python", "Gemini API", "Fitbit API", "Spotify API", "OpenCV", "MongoDB"],
      fullDescription: "Burnout Buddy is an AI-driven wellness companion built at Bitcamp 2025, where it won Best Use of Gemini. The app detects real time signs of burnout in software engineers using eye-blink detection, posture tracking, and Fitbit data. It then responds with mood-based interventions like journaling prompts, music recommendations, and playful mini-games. The frontend is built in React, while the Flask backend uses Gemini for burnout quote generation, OpenCV for fatigue detection, and Fitbit/Spotify integrations for personalized recovery suggestions."
    },
    {
      title: "DocuWell",
      description: "A full stack web application that works as a Patient Management System and incorporates a chatbot.",
      imgUrl: projImg1,
      link: "https://github.com/CSin007/DocuWell",
      techStack: ["React", "Node.js", "Express", "MongoDB","Auth0 API"],
      fullDescription: "DocuWell acts as a database for patients to enter their medicines. It also has a chatbot that can help patients with any questions they may have. Built using React,CSS,HTML for frontend and backend was Node.Js with MongoDB.Also used Auth0 for authentication and OpenAI API."
    },
    {
      title: "AI YouTube Clone",
      description: "An AI-based YouTube clone built with React.js and Node.js that auto generates video thumbnails and description.",
      imgUrl: projImg2,
      link: "https://github.com/CSin007/AI_Dev/tree/main/AIYoutube",
      techStack: ["React.js", "Node.js","OpenAI API","DALL-E API"],
      fullDescription: "This app helps generate video descriptions and thumbnails using OpenAI API and DALL-E API. Built using HTML,CSS and vanilla JavaScript for fronend along with OpenAI,DALL-E-3 API",
    },
    // Add more projects as needed
    {
      title: "Movie App",
      description: "A frontend application built with React.js and React-Router-DOM that fetches movie data from an API and simulates Prime Video.",
      imgUrl: projImg3,
      link: "https://github.com/CSin007/MiniProjectsPractice",
      techStack: ["React.js", "CSS","HTML"],
      fullDescription: "Used advanced features of React.js,ODMB API to fetch movie data from an API and simulate Prime Video."
    },
    {
      title: "Just VR it",
      description: "What if instead of just googling things, you could just VR it?",
      imgUrl: projImg4,
      link: "https://devpost.com/software/just-vr-it",
      techStack: ["React.js", "CSS","Three.Js","C#","Unity","Open AI","Google Alphafold"],
      fullDescription: "Built AI-powered VR study application to help students vizualize and understand complex STEM concepts"
    },
  ];

  const experiences = [
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer Intern",
      date: "June 2025 - August 2025",
      contributions: [
        "Built a React (TypeScript) UI for uploading and previewing attachments, integrating with REST APIs defined using Smithy.",
        "Implemented attachment APIs with Node.js, leveraging AWS S3 pre-signed URLs for secure and scalable media storage.",
        "Designed an event-driven pipeline where S3 PUT triggers invoked an AWS Lambda to update DocumentDB and append attachment metadata to target objects."
      ],
      link: "https://aws.amazon.com/security/"
    },
    {
      company: "Technuf, LLC",
      role: "Software Engineer Intern",
      date: "June 2024 - August 2024",
      contributions: [
        "Built a full stack WordPress plugin with PHP, TypeScript, CSS, and Vue.js (Nuxt).",
        "Developed and maintained REST APIs to interact with the PostgreSQL database.",
        "Integrated seamless payment with PayPal and credit/debit cards.",
      ],
      link: "https://dev.aphelia.io/",
    },
    {
      company: "Quantum Startup Foundry",
      role: "Software Engineer Intern",
      date: "December 2023 - January 2024",
      contributions: [
        "Utilized HTML, CSS, JavaScript, and PHP, Drupal to build a full stack website, improving performance by 12%",
        "Leveraged SQL databases (Salesforce) to optimize data organization for over 100 companies under the foundry",
      ],
      link: "https://qsf.umd.edu/",
    },
    
  ];

  const research = [
    {
      lab: "UMD Computational Linguistics Lab",
      title: "Research Assistant",
      date: "March 2025 - Present",
      contributions: [
        "Conducting literature review on collaborative writing and human-LLM coauthoring behavior to understand how people co-write with large language models.",
        "Developing an autocorrect-like sentence completion system using Python to study real-time language generation and user interaction patterns.",
        "Exploring computational methods for analyzing co-writing dynamics and prompt-driven linguistic adaptation."
      ],
      link: "https://wiki.umiacs.umd.edu/clip/index.php/Main_Page"
    },
    {
      lab: "UMD Computational SocioDynamics Lab",
      title: "Machine Learning Research Intern",
      date: "June 2024 - January 2025",
      contributions: [
        "Preprocessed data and built a web scraping script using Python(Selenium) to collect over 1M+ articles on the English, Bengali and Italian wikis and used SQL to query into the wiki databases",
        "Building a large language model to predict deletion and reasons of deletion of articles using Pandas,NumPy and PyTorch",
      ],
      link: "https://meta.wikimedia.org/wiki/Research:Reducing_the_gender_gap_in_AfD_discussions:_an_evidence_scoring_approach",
    },
    {
      lab: "Human Data Interaction Lab",
      title: "Software Engineer Research Intern",
      date: "June 2024 - August 2024",
      contributions: [
        "Scraped data from over 2,000 websites to collect high-quality SVGs for research, utilizing advanced web scraping techniques using BeaitifulSoup",
        "Annotated data for each chart, using vizualization techniques such as chart.js, d3js, and Plotly",
      ],
      link: "https://www.researchgate.net/publication/384974415_VisAnatomy_An_SVG_Chart_Corpus_with_Fine-Grained_Semantic_Labels",
    },
    {
      lab: "UMD FIRE Lab",
      title: "Data Science and Visualization Research Intern",
      date: "June 2022 - December 2023",
      contributions: [
        "Analyzed microplastic pollution using R(ggplot) and Python to check the effectiveness of the plastic bag ban in the DMV area.",
        "Presented research at Undergraduate Research Symposium",
      ],
      link: "https://github.com/CSin007/fire-summit-microplastic",
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects and Experience</h2>
                  <p>Click below to learn more about my projects and experience.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Research</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} sm={4} md={4}>
                              <div onClick={() => handleShow(project)}>
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="timeline">
                          {experiences.map((exp, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="timeline-content">
                                <h4>{exp.company}</h4>
                                <h5>{exp.role}</h5>
                                <p>{exp.date}</p>
                                <ul>
                                  {exp.contributions.map((contribution, idx) => (
                                    <li key={idx}>{contribution}</li>
                                  ))}
                                </ul>
                                <a href={exp.link} target="_blank" rel="noopener noreferrer">View Project</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="timeline">
                          {research.map((res, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="timeline-content">
                                <h4>{res.lab}</h4>
                                <h5>{res.title}</h5>
                                <p>{res.date}</p>
                                <ul>
                                  {res.contributions.map((contribution, idx) => (
                                    <li key={idx}>{contribution}</li>
                                  ))}
                                </ul>
                                <a href={res.link} target="_blank" rel="noopener noreferrer">View Research</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <img src={selectedProject.imgUrl} alt={selectedProject.title} className="img-fluid mb-3" />
              <h5>Project Description</h5>
              <p>{selectedProject.fullDescription}</p>
              <h5>Tech Stack</h5>
              <ul>
                {selectedProject.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <Button variant="primary" href={selectedProject.link} target="_blank">
                View Project
              </Button>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
