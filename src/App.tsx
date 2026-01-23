import { useState } from "react"

const BASE = "/Portfolioweb"

const projects = [
	{
		key: "insight",
		title: "Insight Engine",
		desc: "Custom 2D engine: A game engine built in mind to make a general purpose 2D games!",
		tags: [
			"C++",
			"ECS",
			"Threading",
			"Mono C#",
			"Memory manager",
			"FMOD",
			"Messenger systems",
      "Multi-Threading"
		],
		images: [
			BASE + "/images/insight1.png",
			BASE + "/images/insight2.png",
		],
		videos: [BASE + "/videos/insightvid.mp4"],
		details: "Insight is a capable 2D engine that is able to perform various different tasks requried for modern 2D games. It features a custom ECS system for entity management, a multi-threaded architecture for performance, C# scripting support via Mono for flexibility, an efficient memory manager for optimal resource usage, FMOD integration for audio, and a messenger system for inter-component communication.",
		links: [{ href: "https://github.com/tzx21100/InsightEngine", label: "Code" }],
	},
	{
		key: "invenio",
		title: "Invenio Engine",
		desc: "Custom 3D engine: A very techincal game engine built for a 3D souls-like game.",
		tags: ["C++", "EnTT", "Behavior Trees", "OpenGL", "GLSL", "Type Reflection"],
		images: [BASE + "/images/invenio1.png",
             BASE + "/images/invenio2.png",
             BASE + "/images/invenio3.png",
    ],
		videos: [],
		details: "Invenio is a real-time 3D game engine built from the ground up in C++20, paired with a custom editor for rapid iteration and gameplay development. It is designed around a data-oriented architecture, with a focus on performance, extensibility, and tooling parity with commercial engines.The engine features a modern OpenGL rendering backend, an ImGui-based editor, a C# scripting layer via Mono, a behaviour tree editor and a growing reflection and serialization system that powers both runtime and editor workflows.",
		links: [],
	},
	{
		key: "Fragments",
		title: "Fragments (2D Action Platformer)",
		desc: "Game built using the Insight Engine, featuring fast-paced combat and intricate level design. Platforming with challenging level design.",
		tags: ["C#", "Game Scripting", "Audio"],
		images: [BASE + "/images/fragment1.png"],
		videos: [BASE + "/videos/fragment1.mp4", BASE + "/videos/fragment2.mp4"],
		details: "Particularly happy with how this game turned out. Not very happy with how the school misspelt my name. Did most of the game scripting in here and all the audio that can be found has been mixed/made/open sourced. You can find it here where they spelt my name wrong :< ",
		links: [{ href: "https://www.digipen.edu.sg/showcase/student-games/fragments", label: "GAME LINK" }],
	},
]

export default function App() {
	const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({})
	const [page, setPage] = useState(0)
	const [popup, setPopup] = useState<{ type: 'img' | 'video', src: string } | null>(null)
	const cardsPerPage = 3
	const maxPage = Math.max(0, Math.ceil(projects.length / cardsPerPage) - 1)
	const visibleProjects = projects.slice(
		page * cardsPerPage,
		page * cardsPerPage + cardsPerPage
	)

	const toggleExpand = (key: string) => setExpanded((e) => ({ ...e, [key]: !e[key] }))

	return (
		<>
			<header className="container">
				<nav className="nav" role="navigation" aria-label="Main navigation">
					<a className="logo" href="#top">
						Home
					</a>
					<div className="links">
						<a href="#projects">Projects</a>
						<a href="#experience">Experience</a>
						<a href="#contact">Contact</a>
					</div>
				</nav>

				<section className="hero" id="top">
					<h1>Tan Zheng Xun</h1>
					<p>
						C++ focused system developer: game engines, simulation tooling,
						automation.
					</p>
					<div className="cta">
						<a className="btn" href="#projects">
							View Projects
						</a>
						<a
							className="btn secondary"
							href="https://github.com/tzx21100"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							className="btn secondary"
							href="Resume.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</div>
				</section>
			</header>

			<main className="container">
				<section id="projects">
					<h2>Projects</h2>
					<div style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16}}>
						<button className="btn secondary" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}>&lt;</button>
						<span style={{margin:'0 16px', color:'var(--muted)'}}>Page {page + 1} of {maxPage + 1}</span>
						<button className="btn secondary" onClick={() => setPage((p) => Math.min(maxPage, p + 1))} disabled={page === maxPage}>&gt;</button>
					</div>
					<div className="grid project-paged">
						{visibleProjects.map((project) => {
							const isExpanded = !!expanded[project.key];
							return (
								<article className="card" key={project.key} style={{display:'flex',alignItems:'stretch',gap:20,minHeight:180}}>
									<div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center'}}>
										<h3>{project.title}</h3>
										<p>{project.desc}</p>
										<ul className="tags">
											{project.tags.map((tag) => (
												<li key={tag}>{tag}</li>
											))}
										</ul>
										<div className="cardlinks">
											<button className="btn secondary" onClick={() => toggleExpand(project.key)}>Details</button>
										</div>
										{isExpanded && (
											<div className="card-details">
												<div style={{height:24}} /> {/* Spacer below details button */}
												<div style={{display:'flex', gap:16, flexWrap:'wrap', marginBottom:12, justifyContent:'center'}}>
													{/* Images and videos in one row, larger size, click to popup */}
													{project.images?.map((img, idx) => (
														<img
															key={"img"+idx}
															src={img}
															alt={project.title + ' screenshot ' + (idx + 1)}
															style={{maxWidth:220, maxHeight:160, borderRadius:10, cursor:'pointer', boxShadow:'0 2px 12px #0002'}}
															onClick={() => setPopup({ type: 'img', src: img })}
														/>
													))}
													{project.videos?.map((vid, idx) => (
														<video
															key={"vid"+idx}
															src={vid}
															controls
															style={{maxWidth:220, maxHeight:160, borderRadius:10, cursor:'pointer', background:'#222', boxShadow:'0 2px 12px #0002'}}
															onClick={e => { e.preventDefault(); setPopup({ type: 'video', src: vid }) }}
														/>
													))}
												</div>
												<p style={{ marginTop: 8 }}>{project.details}</p>
												<div style={{ marginTop: 8 }}>
													{project.links.map((link) => (
														<a
															key={link.label}
															href={link.href}
															target="_blank"
															rel="noreferrer"
															className="btn secondary"
															style={{ marginRight: 8 }}
														>
															{link.label}
														</a>
													))}
												</div>
											</div>
										)}
									</div>
									{/* Preview image on the right, only if not expanded */}
									{!isExpanded && project.images && project.images.length > 0 && (
										<img
											src={project.images[0]}
											alt={project.title + ' preview'}
											style={{height:'90%', minHeight:160, maxHeight:260, width:170, objectFit:'cover', borderRadius:12, boxShadow:'0 1px 12px #0002', marginLeft:12, cursor:'pointer', alignSelf:'center'}}
											onClick={() => setPopup({ type: 'img', src: project.images[0] })}
										/>
									)}
								</article>
							);
						})}
					</div>
				</section>

				<section id="experience">
					<h2>Experience</h2>
					<div className="stack">
						<div className="row">
							<div>
								<h3>VentiTech — Intern</h3>
								<p>
									AV simulation pipelines, tooling, scenario generation,
									performance analysis.
								</p>
							</div>
							<span className="muted">202x</span>
						</div>

						<div className="row">
							<div>
								<h3>DigiPen — Teaching Assistant</h3>
								<p>
									Led labs, study groups, tutoring; grading and feedback;
									debugging support.
								</p>
							</div>
							<span className="muted">202x</span>
						</div>
					</div>
				</section>

				<section id="contact">
					<h2>Contact</h2>
					<p>
						Email:{" "}
						<a href="mailto:tzx8787@gmail.com">tzx8787@gmail.com</a> · LinkedIn:{" "}
						<a
							href="https://www.linkedin.com/in/tan-z-x/"
							target="_blank"
							rel="noreferrer"
						>
							linkedin.com/in/tan-z-x
						</a>
					</p>
				</section>
			</main>

			{/* Popup modal for image/video */}
			{popup && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						background: 'rgba(0,0,0,0.7)',
						zIndex: 1000,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onClick={() => setPopup(null)}
				>
					<div
						style={{
							position: 'relative',
							background: '#181a1b',
							padding: 24,
							borderRadius: 12,
							boxShadow: '0 4px 32px #0008',
							maxWidth: '90vw',
							maxHeight: '90vh',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onClick={e => e.stopPropagation()}
					>
						<button
							style={{
								position: 'absolute',
								top: 8,
								right: 8,
								fontSize: 24,
								background: 'none',
								border: 'none',
								color: '#fff',
								cursor: 'pointer'
							}}
							onClick={() => setPopup(null)}
						>
							&times;
						</button>
						{popup.type === 'img' ? (
							<img
								src={popup.src}
								alt="popup"
								style={{
									maxWidth: '80vw',
									maxHeight: '80vh',
									borderRadius: 12
								}}
							/>
						) : (
							<video
								src={popup.src}
								controls
								autoPlay
								style={{
									maxWidth: '80vw',
									maxHeight: '80vh',
									borderRadius: 12,
									background: '#222'
								}}
							/>
						)}
					</div>
				</div>
			)}

			<footer className="container footer">
				<span className="muted">
					© {new Date().getFullYear()} Tan Zheng Xun
				</span>
			</footer>
		</>
	)
}
