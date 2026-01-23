export default function App() {
  return (
    <>
      <header className="container">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a className="logo" href="#top">Tan Zheng Xun</a>
          <div className="links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero" id="top">
          <h1>Tan Zheng Xun</h1>
          <p>C++ focused system developer: game engines, simulation tooling, automation.</p>
          <div className="cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn secondary" href="https://github.com/tzx21100" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn secondary" href="Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </section>
      </header>

      <main className="container">
        <section id="projects">
          <h2>Projects</h2>

          <div className="grid">
            <article className="card">
              <h3>Insight Engine</h3>
              <p>Custom 2D engine: A game engine built in mind to make a general purpose 2D games!</p>
              <ul className="tags">
                <li>C++</li><li>ECS</li><li>Threading</li><li>Mono C#</li><li>Memory manager</li><li>FMOD</li><li>Messenger systems</li>
              </ul>
              <div className="cardlinks">
                <a href="https://github.com/tzx21100/InsightEngine" target="_blank" rel="noreferrer">Code</a>
              </div>
            </article>

            <article className="card">
              <h3>Invenio Engine</h3>
              <p>Custom 3D engine: A game engine built for a 3D souls-like game.</p>
              <ul className="tags">
                <li>C++</li><li>EnTT</li><li>Simulation</li>
              </ul>
              <div className="cardlinks">
                <a href="https://github.com/tzx21100" target="_blank" rel="noreferrer">Images</a>
              </div>
            </article>

            <article className="card">
              <h3>Scenario Generator (lola)</h3>
              <p>YAML scenario generation, validation, CPU log analysis, automation.</p>
              <ul className="tags">
                <li>Python</li><li>ROS2</li><li>Automation</li>
              </ul>
              <div className="cardlinks">
                <a href="#" target="_blank" rel="noreferrer">Case study</a>
              </div>
            </article>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="stack">
            <div className="row">
              <div>
                <h3>VentiTech — Intern</h3>
                <p>AV simulation pipelines, tooling, scenario generation, performance analysis.</p>
              </div>
              <span className="muted">202x</span>
            </div>

            <div className="row">
              <div>
                <h3>DigiPen — Teaching Assistant</h3>
                <p>Led labs, study groups, tutoring; grading and feedback; debugging support.</p>
              </div>
              <span className="muted">202x</span>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:tzx8787@gmail.com">tzx8787@gmail.com</a> ·
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/tan-z-x/" target="_blank" rel="noreferrer">
              linkedin.com/in/tan-z-x
            </a>
          </p>
        </section>
      </main>

      <footer className="container footer">
        <span className="muted">© {new Date().getFullYear()} Tan Zheng Xun</span>
      </footer>
    </>
  )
}
