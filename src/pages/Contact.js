import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        Let's
        <br />
        Have
        <br />
        Coffee ☕️
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>Ruby on Rails</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Space</p>
        <p>Pizza</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span>
          <a href="mailto:mrsiyam61@gmail.com">CONTACT ME</a>
        </span>
      </h3>

      <hr />

      <div className="social">
        <a
          href="https://github.com/MoyasiGinko"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/moyasi"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="https://wellfound.com/u/moyasi"
          target="_blank"
          rel="noreferrer"
        >
          WELLFOUND
        </a>
        <a
          href="https://www.twitter.com/moyasi_ginko"
          target="_blank"
          rel="noreferrer"
        >
          TWITTER
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
