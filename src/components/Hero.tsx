import Imu from '../assets/orbs.gif';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-overlay">
      <div className="description reveal-up">
        <p className="eyebrow hero-copy">SOFTWARE ENGINEER</p>
        <h2 className="title hero-title">hello, I&apos;m moyasi</h2>
        <h3 className="tagline hero-copy">Creating Digital Experiences</h3>
        <p className="paragraph hero-copy">
          I'm a passionate web developer and UI/UX enthusiast with a love for
          crafting exceptional digital experiences. With my keyboard as my
          paintbrush and lines of code as my canvas, I bring ideas to life in
          the virtual realm. Let's work together to turn your digital dreams
          into reality. Get in touch, and let's embark on this exciting journey
          together!
        </p>
        <div className="hero-btns hero-cta">
          <a
            className="cta-button hire-me"
            href="https://docs.google.com/document/d/1BMSORRcoC9AXmvAX6wXmhk7EiOLAhYCOq1l0SuPwAqI/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            GET MY CV
          </a>
          <a className="cta-button lets-talk" href="#contact">
            LET'S TALK
          </a>
        </div>
      </div>
      <div className="hero-image-wrap reveal-up">
        <img src={Imu.src} alt="Moyasi" className="hero-image" />
      </div>
    </div>
    <div className="social-icons hero-social reveal-up" aria-label="Social links">
      <a href="https://github.com/MoyasiGinko" target="_blank" rel="noreferrer">
        GITHUB
      </a>
      <a href="https://www.linkedin.com/in/moyasi" target="_blank" rel="noreferrer">
        LINKEDIN
      </a>
      <a href="https://wellfound.com/u/moyasi" target="_blank" rel="noreferrer">
        WELLFOUND
      </a>
      <a href="https://www.twitter.com/moyasi_ginko" target="_blank" rel="noreferrer">
        TWITTER
      </a>
    </div>
  </section>
);

export default Hero;