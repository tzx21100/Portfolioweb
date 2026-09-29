import { useEffect, useState } from "react"

const BASE = "/Portfolioweb"

const projects = [
  {
    key: "insight", title: "Insight Engine", category: "2D Game Engine",
    desc: "A general-purpose 2D engine built from the ground up for expressive, performant games.",
    tags: ["C++", "ECS", "Threading", "Mono C#", "Memory manager", "FMOD", "Messaging"],
    images: [BASE + "/images/insight1.png", BASE + "/images/insight2.png"], videos: [BASE + "/videos/insightvid.mp4"],
    details: "Insight is a capable 2D engine designed for the demands of modern games. It features a custom ECS for entity management, a multi-threaded architecture, C# scripting through Mono, an efficient memory manager, FMOD audio integration, and a messenger system for inter-component communication.",
    links: [{ href: "https://github.com/tzx21100/InsightEngine", label: "View source" }],
  },
  {
    key: "invenio", title: "Invenio Engine", category: "3D Game Engine",
    desc: "A deeply technical 3D engine created to power a responsive, atmospheric souls-like game.",
    tags: ["C++20", "EnTT", "Behavior Trees", "OpenGL", "GLSL", "Reflection"],
    images: [BASE + "/images/invenio1.png", BASE + "/images/invenio2.png", BASE + "/images/invenio3.png"], videos: [],
    details: "Invenio is a real-time 3D game engine built from the ground up in C++20, paired with a custom editor for rapid iteration and gameplay development. Its data-oriented architecture focuses on performance, extensibility, and tooling parity with commercial engines. The engine includes a modern OpenGL renderer, an ImGui-based editor, C# scripting through Mono, a behaviour-tree editor, and a growing reflection and serialization system.",
    links: [],
  },
  {
    key: "fragments", title: "Fragments", category: "2D Action Platformer",
    desc: "A fast-paced combat platformer built on Insight Engine, with demanding movement and intricate levels.",
    tags: ["C#", "Game Scripting", "Audio"], images: [BASE + "/images/fragment1.png"],
    videos: [BASE + "/videos/fragment1.mp4", BASE + "/videos/fragment2.mp4"],
    details: "I handled most of the game scripting as well as the audio design and mix. The finished game was selected for DigiPen's student showcase.",
    links: [{ href: "https://www.digipen.edu.sg/showcase/student-games/fragments", label: "Play the game" }],
  },
  {
    key: "tarrots-fate", title: "Tarrot's Fate", category: "3D Action Souls-like",
    desc: "A focused souls-like experience built with Invenio Engine by a multidisciplinary team of twelve.",
    tags: ["C#", "C++", "Behavior Trees", "Audio Design"],
    images: [BASE + "/images/tf1.png", BASE + "/images/tf2.png", BASE + "/images/tf3.png"], videos: [],
    details: "I focused on audio design and creation, while also building tools that enabled the design team to craft levels and encounters. The game and its engine were developed together by a team of twelve.", links: [],
  },
]

type Popup = { type: "img" | "video"; src: string } | null

export default function App() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [page, setPage] = useState(0)
  const [popup, setPopup] = useState<Popup>(null)
  const cardsPerPage = 3
  const maxPage = Math.max(0, Math.ceil(projects.length / cardsPerPage) - 1)
  const visibleProjects = projects.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)

  useEffect(() => {
    if (!popup) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setPopup(null)
    document.addEventListener("keydown", closeOnEscape)
    document.body.classList.add("modal-open")
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.body.classList.remove("modal-open")
    }
  }, [popup])

  const toggleExpand = (key: string) => setExpanded((current) => ({ ...current, [key]: !current[key] }))

  return (
    <>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#top" aria-label="Tan Zheng Xun, home"><span className="logo-mark">TZ</span><span>Zheng Xun</span></a>
          <div className="links"><a href="#projects">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for new opportunities</p>
            <h1>I build systems that make <span>great games possible.</span></h1>
            <p className="hero-description">I’m Tan Zheng Xun, a C++ systems developer focused on game engines, simulation tooling, and thoughtful developer experiences.</p>
            <div className="cta">
              <a className="btn" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="btn secondary" href="https://github.com/tzx21100" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="text-link" href={BASE + "/Resume.pdf"} target="_blank" rel="noreferrer">View résumé</a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Core disciplines">
            <span className="aside-label">Core disciplines</span>
            <div><strong>Engine Architecture</strong><span>Scalable, data-oriented systems</span></div>
            <div><strong>Graphics &amp; Tools</strong><span>Rendering and editor workflows</span></div>
            <div><strong>Gameplay Systems</strong><span>Responsive, extensible mechanics</span></div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <div><p className="section-kicker">Selected work</p><h2>Projects with depth.</h2></div>
            <div className="pagination" aria-label="Project pages">
              <button className="icon-button" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} aria-label="Previous projects">←</button>
              <span><strong>{String(page + 1).padStart(2, "0")}</strong> / {String(maxPage + 1).padStart(2, "0")}</span>
              <button className="icon-button" onClick={() => setPage((p) => Math.min(maxPage, p + 1))} disabled={page === maxPage} aria-label="Next projects">→</button>
            </div>
          </div>
          <div className="project-list">
            {visibleProjects.map((project, index) => {
              const isExpanded = !!expanded[project.key]
              return (
                <article className={`project-card ${isExpanded ? "expanded" : ""}`} key={project.key}>
                  <button className="project-media" onClick={() => setPopup({ type: "img", src: project.images[0] })} aria-label={`Open ${project.title} preview`}>
                    <img src={project.images[0]} alt="" /><span className="project-number">0{page * cardsPerPage + index + 1}</span><span className="media-action">View image ↗</span>
                  </button>
                  <div className="project-content">
                    <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.desc}</p>
                    <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <button className="details-button" onClick={() => toggleExpand(project.key)} aria-expanded={isExpanded}>{isExpanded ? "Close details" : "View case study"}<span aria-hidden="true">{isExpanded ? "−" : "+"}</span></button>
                  </div>
                  {isExpanded && (
                    <div className="card-details">
                      <div className="detail-gallery">
                        {project.images.slice(1).map((src, idx) => <button key={src} onClick={() => setPopup({ type: "img", src })}><img src={src} alt={`${project.title} screenshot ${idx + 2}`} /></button>)}
                        {project.videos.map((src, idx) => <button key={src} className="video-thumb" onClick={() => setPopup({ type: "video", src })}><video src={src} muted /><span>Play video {idx + 1}</span></button>)}
                      </div>
                      <div className="detail-copy"><p>{project.details}</p>{project.links.map((link) => <a key={link.label} className="text-link" href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-heading"><div><p className="section-kicker">Where I’ve worked</p><h2>Experience.</h2></div></div>
          <div className="experience-list">
            <article className="experience-row">
              <span className="experience-year">Apr 2025 — Apr 2026</span>
              <div className="experience-role"><h3>Simulation Engineer Intern</h3><p>Venti Technologies</p></div>
              <ul className="experience-highlights">
                <li>Designed and maintained a large-scale autonomous-vehicle simulation framework for complex multi-agent scenarios with strict structural and execution constraints.</li>
                <li>Built an AI-powered scenario generator by fine-tuning open-source LLMs with PyTorch, running local inference through llama.cpp, and integrating tool-based workflows.</li>
                <li>Worked extensively in Linux environments, applying defensive programming practices in Python and C++.</li>
              </ul>
            </article>
            <article className="experience-row">
              <span className="experience-year">Jun 2026 — Sep 2026</span>
              <div className="experience-role"><h3>CCTP Cybersecurity Trainee</h3><p>RedAlpha Cybersecurity</p></div>
              <ul className="experience-highlights">
                <li>Completed intensive hands-on training in penetration testing, malware analysis, reverse engineering, digital forensics, and Windows and network security.</li>
                <li>Investigated software and systems with Ghidra, Burp Suite, Wireshark, Volatility, Sysmon, and debugging and analysis tools.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <p className="section-kicker">Let’s build something</p><h2>Have an ambitious system in mind?</h2>
          <a className="contact-email" href="mailto:tzx8787@gmail.com">tzx8787@gmail.com <span>↗</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/tan-z-x/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </section>
      </main>

      {popup && <div className="modal" role="dialog" aria-modal="true" aria-label="Media preview" onClick={() => setPopup(null)}><div className="modal-content" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setPopup(null)} aria-label="Close preview">×</button>{popup.type === "img" ? <img src={popup.src} alt="Project preview" /> : <video src={popup.src} controls autoPlay />}</div></div>}
      <footer className="footer container"><span>© {new Date().getFullYear()} Tan Zheng Xun</span><span>Designed &amp; built with care.</span></footer>
    </>
  )
}
