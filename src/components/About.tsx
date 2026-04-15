import BootStrap from '../assets/bootstrap.png';
import Canva from '../assets/canva.png';
import CDT from '../assets/cdt.png';
import CSS from '../assets/css.png';
import Figma from '../assets/figma.png';
import Flutter from '../assets/flutter.png';
import GitLogo from '../assets/git.png';
import GitHublogo from '../assets/github.png';
import GMeet from '../assets/meet.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import JEST from '../assets/jest.png';
import jQuery from '../assets/jquery.png';
import NextJS from '../assets/next.webp';
import NPMlogo from '../assets/npm.png';
import PostGres from '../assets/postgres.png';
import PostMan from '../assets/postman.png';
import Rails from '../assets/rails.png';
import ReactIcon from '../assets/react.png';
import ReduxIcon from '../assets/redux.png';
import RSpecLogo from '../assets/rspec.png';
import Ruby from '../assets/ruby.png';
import Sass from '../assets/sass.png';
import SkypeLogo from '../assets/skype.png';
import Slack from '../assets/slack.png';
import VSCode from '../assets/vscode.png';
import WebPack from '../assets/webpack.png';
import Zoomlogo from '../assets/zoom.webp';

const About = () => (
  <section className="about" id="about">
    <div className="about-me reveal-up">
      <p className="eyebrow">ABOUT</p>
      <h2 className="title about-title">about ME,</h2>
      <p className="paragraph about-para">
        My journey into the world of programming began in 2020 when I embarked
        on a freelancing adventure. Since then, I've had the opportunity to work
        on a diverse range of projects, refining my skills and expanding my
        knowledge along the way. I have collaborated with various clients both
        independently and as part of a team, creating innovative and
        user-friendly websites and mobile applications.
      </p>
      <a
        className="cta-button hire-me"
        href="https://docs.google.com/document/d/1BMSORRcoC9AXmvAX6wXmhk7EiOLAhYCOq1l0SuPwAqI/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >
        GET MY CV
      </a>
    </div>
    <div className="about-skills reveal-up">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill"><img src={ReactIcon.src} alt="React" /><p>React</p></div>
        <div className="skill"><img src={JavaScript.src} alt="JavaScript" /><p>JavaScript</p></div>
        <div className="skill"><img src={ReduxIcon.src} alt="Redux" /><p>Redux</p></div>
        <div className="skill"><img src={HTML.src} alt="HTML5" /><p>HTML5</p></div>
        <div className="skill"><img src={CSS.src} alt="CSS3" /><p>CSS3</p></div>
        <div className="skill"><img src={jQuery.src} alt="jQuery" /><p>jQuery</p></div>
        <div className="skill"><img src={Sass.src} alt="Sass" /><p>SASS</p></div>
        <div className="skill"><img src={BootStrap.src} alt="Bootstrap" /><p>Bootstrap</p></div>
        <div className="skill"><img src={NextJS.src} alt="Next.js" /><p>Next.js</p></div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill"><img src={Ruby.src} alt="Ruby" /><p>Ruby</p></div>
        <div className="skill"><img src={Rails.src} alt="Ruby on Rails" /><p>Ruby on Rails</p></div>
        <div className="skill"><img src={PostGres.src} alt="PostgreSQL" /><p>PostgreSQL</p></div>
      </div>
      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill"><img src={ReactIcon.src} alt="React Native" /><p>React Native</p></div>
        <div className="skill"><img src={Flutter.src} alt="Flutter" /><p>Flutter</p></div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill"><img src={GitLogo.src} alt="Git" /><p>Git</p></div>
        <div className="skill"><img src={GitHublogo.src} alt="GitHub" /><p>GitHub</p></div>
        <div className="skill"><img src={RSpecLogo.src} alt="RSpec" /><p>RSpec</p></div>
        <div className="skill"><img src={JEST.src} alt="Jest" /><p>Jest</p></div>
        <div className="skill"><img src={CDT.src} alt="Dev Tools" /><p>Dev Tools</p></div>
        <div className="skill"><img src={VSCode.src} alt="VS Code" /><p>VS Code</p></div>
        <div className="skill"><img src={WebPack.src} alt="Webpack" /><p>Webpack</p></div>
        <div className="skill"><img src={PostMan.src} alt="Postman" /><p>Postman</p></div>
        <div className="skill"><img src={NPMlogo.src} alt="npm" /><p>npm</p></div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill"><img src={Canva.src} alt="Canva" /><p>Canva</p></div>
        <div className="skill"><img src={Figma.src} alt="Figma" /><p>Figma</p></div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill"><img src={Slack.src} alt="Slack" /><p>Slack</p></div>
        <div className="skill"><img src={SkypeLogo.src} alt="Skype" /><p>Skype</p></div>
        <div className="skill"><img src={GMeet.src} alt="Google Meet" /><p>Google Meet</p></div>
        <div className="skill"><img src={Zoomlogo.src} alt="Zoom" /><p>Zoom</p></div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Mentoring</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>
  </section>
);

export default About;