import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hello, I'm moyasi</h2>
        <h3 className="tagline">Creating Digital Experiences</h3>
        <p className="paragraph">
          I'm a passionate web developer and UI/UX enthusiast with a love for
          crafting exceptional digital experiences. With my keyboard as my
          paintbrush and lines of code as my canvas, I bring ideas to life in
          the virtual realm. Let's work together to turn your digital dreams
          into reality. Get in touch, and let's embark on this exciting journey
          together!
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://docs.google.com/document/d/1BMSORRcoC9AXmvAX6wXmhk7EiOLAhYCOq1l0SuPwAqI/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="Moyasi" className="hero-image" />
    </div>
    <div className="social-icons">
      <a href="https://github.com/MoyasiGinko" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/moyasi"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a href="https://wellfound.com/u/moyasi" target="_blank" rel="noreferrer">
        <i className="fab fa-angellist" />
      </a>
      <a
        href="https://www.twitter.com/moyasi_ginko"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
    </div>
  </div>
);

export default Hero;
