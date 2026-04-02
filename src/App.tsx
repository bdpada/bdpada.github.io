function App() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Bradley Pada</h1>
        <p>Aspiring Software Engineer | React, TypeScript, Python, SQL, Cybersecurity</p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2>About Me</h2>
        <p>
          I am a software engineering student and technology professional with a background in IT,
          cybersecurity, and programming. I am building projects in web development, backend engineering,
          and data-focused software.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          <li>Football Prospect Stats API</li>
          <li>Text-Based Football Management Game</li>
          <li>Personal Portfolio Website</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Skills</h2>
        <ul>
          <li>TypeScript / JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Git / GitHub</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>GitHub: github.com/your-username</p>
      </section>
    </main>
  );
}

export default App;