import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">Bradley Pada</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="container">
        <header className="hero">
          <h1>Bradley Pada</h1>
          <p>Software Engineering Student | IT Support | Aspiring Developer</p>
        </header>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a software engineering student with experience in IT support,
            cybersecurity, and programming. I enjoy building projects that grow
            my skills in web development, backend systems, and software design.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="project-grid">
            <div className="card">
              <h3>Football Prospect Stats API</h3>
              <p>
                A project focused on organizing and serving football prospect
                data.
              </p>
              <a
                className="button"
                href="https://github.com/bdpada"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="card">
              <h3>Text-Based Football Management Game</h3>
              <p>
                A game project exploring logic, player decisions, and team
                management.
              </p>
              <a
                className="button"
                href="https://github.com/bdpada"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="card">
              <h3>Personal Portfolio Website</h3>
              <p>
                A portfolio built with React and TypeScript, hosted on GitHub
                Pages.
              </p>
              <a
                className="button"
                href="https://github.com/bdpada/bdpada.github.io"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Git and GitHub</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: pada.bradley@gmail.com</p>
          <p>GitHub: github.com/bdpada</p>

          <div className="button-group">
            <a
              className="button"
              href="https://github.com/bdpada"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>

            <a
              className="button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;