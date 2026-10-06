import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL
const DOWNLOAD = "https://tzx8787.itch.io/locail"
const screenshots = [
  { src: "results.png", title: "Find your files", alt: "Locail showing exact-word search results for water" },
  { src: "assistant.png", title: "Ask your local AI", alt: "Locail using a local AI model to find images containing the text GOOD" },
  { src: "search.png", title: "Keep it within reach", alt: "Locail's compact search window on a Windows desktop" },
]

export default function Locail() {
  const [preview, setPreview] = useState<(typeof screenshots)[number] | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (preview) {
      dialog.current?.showModal()
      document.body.classList.add("modal-open")
    }
    return () => document.body.classList.remove("modal-open")
  }, [preview])

  const closePreview = () => {
    dialog.current?.close()
    setPreview(null)
  }

  return (
    <div className="locail-page">
      <div className="ambient ambient-one" />
      <header className="site-header">
        <nav className="nav container" aria-label="Locail navigation">
          <a className="logo" href="#/locail" aria-label="Locail home"><img className="locail-mark" src={BASE + "images/locail/icon.png"} alt="" /><span>Locail</span></a>
          <div className="links"><a href="#ai">← Portfolio</a><a href={DOWNLOAD} target="_blank" rel="noreferrer">Get Locail ↗</a></div>
        </nav>
      </header>
      <main>
        <section className="locail-hero container">
          <div className="locail-hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Local file search for Windows</p>
            <h1>Your files.<br /> <span>Found locally.</span></h1>
            <p className="hero-description">A simpler way to search your folders. Locail keeps your index on your PC, with optional image recognition and local AI when you want to go further.</p>
            <div className="cta"><a className="btn" href={DOWNLOAD} target="_blank" rel="noreferrer">Download on itch.io <span aria-hidden="true">↗</span></a><button className="text-link workflow-link" onClick={() => document.getElementById("locail-workflow")?.scrollIntoView()}>See how it works ↓</button></div>
            <p className="download-note">Windows · Name your own price</p>
            <div className="shortcut-note"><kbd>Ctrl</kbd><span>+</span><kbd>Alt</kbd><span>+</span><kbd>Space</kbd><span>Search within reach.</span></div>
          </div>
          <div className="locail-hero-visual">
            <div className="visual-caption"><span className="status-dot" /> Your folders. Your machine.</div>
            <button className="product-shot" onClick={() => setPreview(screenshots[0])} aria-label="Enlarge Locail file search screenshot"><img src={BASE + "images/locail/results.png"} alt={screenshots[0].alt} /><span className="shot-enlarge">Enlarge screenshot ↗</span></button>
            <p className="visual-footnote">Actual Locail interface</p>
          </div>
        </section>

        <div className="product-principles container"><span>Private by design</span><span>Folder-level indexing</span><span>AI is optional</span></div>

        <section className="section container" id="locail-workflow">
          <div className="section-heading"><div><p className="section-kicker">The everyday workflow</p><h2>Choose. Index. Find.</h2></div><p className="section-intro">From a folder full of files to the one you need.</p></div>
          <div className="product-steps">
            <article><span className="step-number">01</span><h3>Choose a folder</h3><p>Point Locail at the directory you want to search. The first index gathers its data and can take time for larger folders.</p></article>
            <article><span className="step-number">02</span><h3>Bring up search</h3><p>Use <kbd>Ctrl + Alt + Space</kbd> to show or hide the search window. Search your saved index while Locail watches for file changes in the background.</p></article>
            <article><span className="step-number">03</span><h3>Go straight to the file</h3><p>Click a result to open its directory and locate the file. Prefer a bigger view? Open the full workspace in your browser.</p></article>
          </div>
        </section>

        <section className="section container">
          <div className="section-heading"><div><p className="section-kicker">Go beyond filenames</p><h2>A little more context.</h2></div></div>
          <div className="product-features">
            <article><span className="feature-label">Content search</span><h3>When the name isn’t enough.</h3><p>Locail can recognize text in images and documents. Find that game sprite with “GOOD” on it, even if you gave the file a forgettable name.</p></article>
            <article><span className="feature-label">Optional · Advanced edition</span><h3>Give images another clue.</h3><p>Enable machine learning photo recognition to categorize images with confidence scores. Useful for a photo collection full of vague filenames.</p></article>
            <article><span className="feature-label">Optional · Bring your own model</span><h3>Ask in your own words.</h3><p>Load your own GGUF model for local AI through the app or web workspace. Results and performance depend on the model and your computer. AI features are disabled by default.</p></article>
          </div>
          <div className="product-gallery">{screenshots.map((shot) => <figure key={shot.src}><button onClick={() => setPreview(shot)} aria-label={`Enlarge screenshot: ${shot.title}`}><img src={BASE + "images/locail/" + shot.src} alt={shot.alt} loading="lazy" /><span>View screenshot ↗</span></button><figcaption>{shot.title}</figcaption></figure>)}</div>
        </section>

        <section className="privacy-panel container"><div><p className="section-kicker">Your data stays yours</p><h2>Local means local.</h2></div><div><p>Locail keeps its index and cached data on your computer. The application does not transmit your file data out of the app.</p><p>Its local AI has no tools to edit or delete your files. You choose whether to enable the optional AI features.</p><p className="cache-note">Local cache location <code>%localappdata%/Locail</code></p></div></section>

        <section className="section container" id="locail-download">
          <div className="section-heading"><div><p className="section-kicker">Available now on itch.io</p><h2>Make room for finding.</h2></div><p className="section-intro">Two Windows editions. Name your own price.</p></div>
          <div className="edition-grid"><article className="edition-card"><p className="section-kicker">Regular</p><h3>Locail</h3><p>Start with local file search. Includes support for connecting your own local LLM.</p><p className="edition-file">Locail.exe <span>47 MB</span></p><a className="btn secondary" href={DOWNLOAD} target="_blank" rel="noreferrer">Get regular on itch.io ↗</a></article><article className="edition-card advanced"><p className="section-kicker">Advanced</p><h3>Locail + image recognition</h3><p>Everything in the regular edition, with an image recognition model included.</p><p className="edition-file">Locail_advanced.exe <span>357 MB</span></p><a className="btn" href={DOWNLOAD} target="_blank" rel="noreferrer">Get advanced on itch.io ↗</a></article></div>
          <div className="product-faq"><h3>A few things to know.</h3><details><summary>Do I need an AI model to use Locail?</summary><p>No. Regular file search works without local AI. To use the optional local AI capability, supply your own GGUF model. The advanced edition includes a separate image recognition model.</p></details><details><summary>Why does the first index take time?</summary><p>Locail gathers data from the folder you choose before you can search the saved index. Larger directories can take longer. It then watches the directory for changes and updates the index.</p></details><details><summary>Where do I download it or leave feedback?</summary><p>Both editions are available on <a className="text-link" href={DOWNLOAD} target="_blank" rel="noreferrer">Locail’s itch.io page ↗</a>. You can also leave a comment there with an itch.io account.</p></details></div>
        </section>
      </main>
      <footer className="footer container"><span>Locail · Built by Tan Zheng Xun</span><a className="text-link" href="#ai">Back to portfolio ↗</a></footer>
      <dialog ref={dialog} className="product-dialog" aria-label={preview?.title ?? "Locail screenshot"} onCancel={() => setPreview(null)} onClose={() => setPreview(null)} onClick={(event) => { if (event.target === event.currentTarget) closePreview() }}><button className="modal-close" onClick={closePreview} aria-label="Close screenshot">×</button>{preview && <img src={BASE + "images/locail/" + preview.src} alt={preview.alt} />}</dialog>
    </div>
  )
}
