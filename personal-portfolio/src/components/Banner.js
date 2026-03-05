import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import BannerImg from '../assets/img/BannerImg.png'

const TO_ROTATE = ["Frontend Developer", "Backend Developer", "Machine Learning"];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % TO_ROTATE.length;
    const fullText = TO_ROTATE[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Chayanika`}<br /><br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer", "Backend Developer", "Machine Learning]'><span className="wrap">{text}</span></span></h1>
                <br />
                <br />
                <p>
  <h2>Hello, fellow space explorer!</h2>
  <ul>
    <li>I am <strong>Chayanika Sinha</strong>, a senior at the University of Maryland College Park.</li>
    <li>Minoring in <strong>Astronomy</strong> and <strong>Data Science</strong>.</li>
    <li>A <strong>Full Stack Web Developer</strong> with an interest in <strong>Machine Learning</strong>.</li>
    <li>Worked internships at companies like AWS,Wikipedia and MITRE as a software engineer in the past.</li>
    <li>Currently working as a <strong>Natural Language Research Assistant</strong>.</li>
  </ul>
</p>
                  <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} style={{ marginTop: '60px' }}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={BannerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
