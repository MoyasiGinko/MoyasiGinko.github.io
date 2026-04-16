const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <div className="about-pin reveal-up">
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
    </div>
    <div className="about-skills reveal-up">
      <div className="skills-grid">
        <div className="skills-column skills-column-core">
          <section className="skill-group">
            <h2 className="skill-title">Front-End</h2>
            <div className="skills">
              <p className="soft-skill">React</p>
              <p className="soft-skill">JavaScript</p>
              <p className="soft-skill">Redux</p>
              <p className="soft-skill">HTML5</p>
              <p className="soft-skill">CSS3</p>
              <p className="soft-skill">jQuery</p>
              <p className="soft-skill">SASS</p>
              <p className="soft-skill">Bootstrap</p>
              <p className="soft-skill">Next.js</p>
              <p className="soft-skill">Tailwind CSS</p>
              <p className="soft-skill">GSAP</p>
              <p className="soft-skill">Framer Motion</p>
              <p className="soft-skill">TypeScript</p>
            </div>
          </section>

          <section className="skill-group">
            <h2 className="skill-title">Back-End</h2>
            <div className="skills">
              <p className="soft-skill">Ruby</p>
              <p className="soft-skill">Ruby on Rails</p>
              <p className="soft-skill">PostgreSQL</p>
              <p className="soft-skill">Python</p>
              <p className="soft-skill">Django</p>
              <p className="soft-skill">Laravel</p>
              <p className="soft-skill">PHP</p>
              <p className="soft-skill">MySQL</p>
            </div>
          </section>

          <section className="skill-group">
            <h2 className="skill-title">Mobile</h2>
            <div className="skills">
              <p className="soft-skill">React Native</p>
              <p className="soft-skill">Flutter</p>
            </div>
          </section>

          <section className="skill-group">
            <h2 className="skill-title">AI-Driven Skills & Expertise</h2>
            <div className="skills">
              <p className="soft-skill">Prompt Engineering</p>
              <p className="soft-skill">LLM Integration</p>
              <p className="soft-skill">RAG Pipelines</p>
              <p className="soft-skill">AI Workflow Automation</p>
              <p className="soft-skill">AI Feature Prototyping</p>
              <p className="soft-skill">OpenAI API</p>
              <p className="soft-skill">LangChain Basics</p>
              <p className="soft-skill">Agentic App Patterns</p>
            </div>
          </section>
        </div>

        <div className="skills-column skills-column-support">
          <section className="skill-group">
            <h2 className="skill-title">Tools</h2>
            <div className="skills">
              <p className="soft-skill">Git</p>
              <p className="soft-skill">GitHub</p>
              <p className="soft-skill">RSpec</p>
              <p className="soft-skill">Jest</p>
              <p className="soft-skill">Dev Tools</p>
              <p className="soft-skill">VS Code</p>
              <p className="soft-skill">Webpack</p>
              <p className="soft-skill">Postman</p>
              <p className="soft-skill">npm</p>
              <p className="soft-skill">Docker</p>
              <p className="soft-skill">GitHub Actions</p>
              <p className="soft-skill">Linux</p>
              <p className="soft-skill">Vercel</p>
              <p className="soft-skill">Figma Dev Mode</p>
            </div>
          </section>

          <section className="skill-group">
            <h2 className="skill-title">Design</h2>
            <div className="skills">
              <p className="soft-skill">Canva</p>
              <p className="soft-skill">Figma</p>
            </div>
          </section>

          <section className="skill-group">
            <h2 className="skill-title">Communication</h2>
            <div className="skills">
              <p className="soft-skill">Slack</p>
              <p className="soft-skill">Skype</p>
              <p className="soft-skill">Google Meet</p>
              <p className="soft-skill">Zoom</p>
            </div>
          </section>

          <section className="skill-group">
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
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default About;