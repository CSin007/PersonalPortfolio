import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import ocamlLogo from "../assets/img/ocamlLogo.svg";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                
                
                
                <div className="item">
                  <a href="https://www.java.com" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                      alt="Java"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="CSS3"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="React"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                      alt="Vue.js"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Vue.js</h5>
                </div>
                
                <div className="item">
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="nodejs"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="MongoDB"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                      alt="SQL"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <a href="https://www.python.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      alt="Python"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Python</h5>
                </div>
               
                <div className="item">
                  <a href="https://www.python.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
                      alt="Pandas"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Pandas</h5>
                </div>
                
                
                <div className="item">
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
                      alt="R"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>R</h5>
                </div>
               
                <div className="item">
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img
                      src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                      alt="Postman"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <a href="https://www.php.net" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                      alt="PHP"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                      alt="C"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>C</h5>
                </div>
                <div className="item">
                  <a href="https://ocaml.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original-wordmark.svg"
                      alt="OCaml"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>OCaml</h5>
                </div>
                <div className="item">
                  <a href="https://wordpress.com/ppc/lohp-campaign/?utm_source=google&utm_campaign=google_search_wpcom_acquisition_brand_us_en&utm_medium=paid_search&keyword=wordpress&creative=685174474764&campaignid=20879142434&adgroupid=157130594819&matchtype=e&device=c&network=g&targetid=kwd-313411415&utm_content=&gad_source=1&gclid=Cj0KCQjwgL-3BhDnARIsAL6KZ6-jSIelEUDnOYDqEHwBHHiXESgMSrYvQCL7YBZ0SbLjtuN3qerBuvQaAlMlEALw_wcB" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
                      alt="Wordpress"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>WordPress</h5>
                </div>
                <div className="item">
                  <a href="https://www.rust-lang.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
                      alt="Rust"
                      style={{ filter: 'invert(1)' }} // This inverts the color for better visibility
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Rust</h5>
                </div>
                <div className="item">
                  <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                      alt="aws"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>AWS</h5>
                </div>
                
                <div className="item">
                  <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
                      alt="kubernetes"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Kubernetes</h5>
                </div>
                <div className="item">
                  <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                      alt="docker"
                      width="40"
                      height="40"
                    />
                  </a>
                  <h5>Docker</h5>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
