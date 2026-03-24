import { useState, useMemo } from 'react'
import './App.css'

const initialProjects = [
  {
    id: 1,
    title: 'Student Portfolio Web App',
    role: 'Developer, Designer',
    tech: 'React.js, Vite, CSS',
  },
  {
    id: 2,
    title: 'Academic Grade Tracker',
    role: 'Developer',
    tech: 'HTML, CSS, JavaScript',
  },
]

const interestMessages = {
  Web: 'Your passion for web apps is strong. Build a full-stack React + Node project next.',
  Mobile: 'Mobile apps are fun; try React Native or Flutter to take your skills further.',
  AI: 'AI work is in demand. Start with Python ML tutorials and integrate APIs in React.',
  Games: 'Game dev is creative. You can prototype with Phaser or Unity after learning JS basics.',
  Backend: 'Backend focus is solid. Practice Express, REST, and MongoDB for production-ready APIs.',
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [sectionOpen, setSectionOpen] = useState({
    about: true,
    interests: true,
    skills: true,
    projects: true,
    reflection: true,
  })
  const [selectedInterest, setSelectedInterest] = useState('Web')
  const [projects, setProjects] = useState(initialProjects)
  const [newProjectName, setNewProjectName] = useState('')

  const filteredSkills = ['JavaScript', 'HTML', 'CSS', 'Python', 'React.js', 'Vite', 'Git', 'GitHub', 'Node.js']

  const message = interestMessages[selectedInterest]

  const rootClass = theme === 'dark' ? 'theme-dark' : 'theme-light'

  const showSection = (section) => {
    setSectionOpen((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const addProject = () => {
    const name = newProjectName.trim()
    if (!name) return
    setProjects((prev) => [
      ...prev,
      { id: Date.now(), title: name, role: 'Self-directed', tech: 'React.js / CSS' },
    ])
    setNewProjectName('')
  }

  const showProjects = useMemo(() => projects.length > 0, [projects])

  return (
    <div id="root" className={rootClass}>
      <div className="control-bar card">
        <button className="btn" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>

        <div className="toggle-controls">
          {Object.keys(sectionOpen).map((section) => (
            <button key={section} className="chip" onClick={() => showSection(section)}>
              {sectionOpen[section] ? 'Hide' : 'Show'} {section
                .charAt(0)
                .toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <header className="card">
        <h1 className="card-title">Liezer Mendoza - Student Web Portfolio</h1>
        <hr className="line blue" />
        <p className="info">React.js portfolio project for midterm, submitted before March 17, 2026</p>
      </header>

      {sectionOpen.about && (
        <section className="card">
          <h2>Home / About Me</h2>
          <img
            src="pfko.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <p>
            Hello, I’m Liezer Tadeja Mendoza. I am a full-stack development student from Occidental Mindoro.
            I enjoy learning React, building web interfaces, and solving real problems with code.
          </p>
          <p>
            Location: Payompon, Mamburao, Occidental Mindoro
            <br /> Birthdate: September 16, 2004
          </p>
        </section>
      )}

      {sectionOpen.interests && (
        <section className="card">
          <h2>Interests & Goals</h2>
          <div className="select-wrap">
            <label htmlFor="interest">Pick an interest:</label>
            <select
              id="interest"
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
            >
              {Object.keys(interestMessages).map((label) => (
                <option key={label} value={label}>{label}</option>
              ))}
            </select>
          </div>
          <p>{message}</p>
          <ul>
            <li>Biggest accomplishment: Completed an end-to-end portfolio website project with React, including responsive UI components.</li>
            <li>Goal: Build portfolio-ready full-stack applications with React, Node.js, and cloud deployment.</li>
          </ul>
        </section>
      )}

      {sectionOpen.skills && (
        <section className="card">
          <h2>Skills</h2>
          <p><strong>Programming Languages:</strong> JavaScript, HTML, CSS, Python</p>
          <p><strong>Tools/Frameworks/Platforms:</strong> React.js, Vite, Git, GitHub, Node.js, Visual Studio Code</p>
          <p><strong>Framework mention (required):</strong> React.js (in the tools/framework section)</p>
          <div className="skills-list">
            {filteredSkills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {sectionOpen.projects && (
        <section className="card">
          <h2>Projects</h2>
          {showProjects ? (
            projects.map((project) => (
              <div key={project.id} className="educ-item">
                <div>
                  <h3>{project.title}</h3>
                  <p>Role: {project.role}</p>
                  <p>Technologies: {project.tech}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No projects yet. Add one!</p>
          )}

          <div className="project-add">
            <input
              type="text"
              placeholder="Add project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <button className="btn" onClick={addProject}>Add Project</button>
          </div>
        </section>
      )}

      {sectionOpen.reflection && (
        <section className="card">
          <h2>Reflection</h2>
          <p><strong>Learned concepts:</strong> JSX syntax, component-based architecture, state hooks, props, conditional rendering, theming, responsive design.</p>
          <p><strong>Want to learn further:</strong> Advanced React patterns, React Query, TypeScript, Node.js/Express backend APIs, database integration, deployment workflows.</p>
        </section>
      )}

      <footer className="card info footer">
        <p>Contact: liezer@example.com | GitHub: github.com/liezermendoza</p>
      </footer>
    </div>
  )
}

export default App
