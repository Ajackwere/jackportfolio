// import AboutImage from "../../assets/about.jpg";
import HeaderImage from "../../assets/header.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={HeaderImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hello, my name is Austine Jack Were from Nairobi, Kenya. I'm a
            full-stack software engineer. Solving software problems and building
            projects for my clients is my passion. Having been in the web
            development industry for over 2 years, I have served several happy
            clients. My top priority is to get your business online
            the right way, giving you industry-standard design and all the
            functionality you need to operate smoothly online. Get in touch
            today with the details of your project let's get started! Check out
            my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
