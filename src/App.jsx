import  { useState, useEffect } from 'react'
import conductingPhoto from './assets/conducting.jpg'
import './App.css'

// ─── EDIT THESE TO PERSONALISE ───────────────────────────────────────────────
const COMPOSER = {
  name: 'Joshua Feldman',
  title: 'Composer, Conductor, Horn Player',
  bio: `\tJoshua Feldman (b. 2004) is a New York based composer, French horn player 
  and music educator. He is a graduate of the Hoff-Barthelson Music School and Skidmore College. 
  Throughout his musical journey he has studied French horn under instructors such as Karen Froehlich, 
  Darlene Kaukoranta and Patrice Malatestinic, as well as composition under Joseph Piscatelli and Dr. Evan Mack. 
`,
  bio2: `\tJoshua has collaborated as a composer with a number of groups such as 
  Carnegie Hall’s Ensemble Connect, Grammy Award winning ensemble Sō Percussion, and the 
  Skidmore Symphony Orchestra. In addition to his composition work, Joshua served as music director and conductor for the
   Westchester Brassmen Drum and Bugle Corps since 2022. He also plays French horn with various ensembles including the 
   Schenectady-Saratoga Symphony Orchestra, Excelsior Symphony Orchestra, New York-Vermont Wind Symphony.`,
  email: 'joshuafeldmanmusic@gmail.com',
}

// Replace with your actual YouTube video IDs (the part after ?v= in the URL)
const VIDEOS = [
  {
    id: '35E50IMZ-G0',
    title: 'Sonoravia',
    subtitle: 'Skidmore Symphony Orchestra',
  },
  {
    id: 'uPhZlS7HFCY',
    title: 'Clashes and Cries',
    subtitle: 'Skidmore String Quartet',
  },
  {
    id: '7xnxgrMyhDM',
    title: 'Desolation Suite',
    subtitle: 'Saratoga Sinfonietta',
  },

    {
        id: 'EHupy1-hV6k',
        title: 'Shimmers of Blue',
        subtitle: 'Composed for Sō Percussion',
    },


]
// ─────────────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <span className="nav__name">{COMPOSER.name}</span>
        <ul className="nav__links">
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  )
}

function Hero() {
  return (
      <section className="hero">
        <div className="hero__image-wrap">
          <img src={conductingPhoto} alt={`${COMPOSER.name} conducting`} className="hero__image" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow"></p>
          <h1 className="hero__name">{COMPOSER.name}</h1>
          <div className="hero__rule" />
          <p className="hero__tagline">
            <em>Composer, Conductor, Horn Player</em>
          </p>
        </div>
        <a href="#about" className="hero__scroll" aria-label="Scroll down">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </a>
      </section>
  )
}

function About() {
  return (
      <section className="section about" id="about">
        <div className="section__inner">
          <div className="section__label">About</div>
          <h2 className="section__heading">The Composer</h2>
          <div className="about__body">
            <p>{COMPOSER.bio}</p>
            <p>{COMPOSER.bio2}</p>
          </div>
        </div>
      </section>
  )
}

function VideoCard({ video }) {
  const [active, setActive] = useState(false)

  return (
      <div className="video-card">
        {active ? (
            <iframe
                className="video-card__iframe"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        ) : (
            <button
                className="video-card__thumb"
                onClick={() => setActive(true)}
                aria-label={`Play ${video.title}`}
            >
              <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="video-card__thumb-img"
              />
              <div className="video-card__thumb-overlay" />
              <div className="video-card__play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
        )}
        <div className="video-card__info">
          <h3 className="video-card__title">{video.title}</h3>
          <p className="video-card__subtitle">{video.subtitle}</p>
        </div>
      </div>
  )
}

const CATALOG = [
    { title: 'The Second Prometheus', instrumentation: 'for Piano Quintet', year: 2026 },
    { title: 'Saratoga Variations', instrumentation: 'for Violin and Cello', year: 2026 },
    { title: 'Desolation', instrumentation: 'for Chamber Orchestra', year: 2026 },
    { title: 'Shimmers of Blue', instrumentation: 'for Sō Percussion', year: 2026 },
    { title: 'Beksiński', instrumentation: 'for Piano Trio', year: 2026 },
    { title: 'Sonoravia', instrumentation: 'for Symphony Orchestra', year: 2025 },
    { title: 'Ultima Voca', instrumentation: 'for String Octet', year: 2025 },
    { title: 'Clashes and Cries', instrumentation: 'for String Quartet', year: 2025 },
    { title: 'Aria Without Words', instrumentation: 'for Solo Horn', year: 2025 },
    { title: 'Frenzy', instrumentation: 'for Horn Quintet', year: 2025 },
    { title: 'Two Miniatures', instrumentation: 'for Solo Piano', year: 2024 },
    { title: 'Nature\'s Sequences', instrumentation: 'for Solo Piano', year: 2024 },
    { title: 'Butterfly Lovers', instrumentation: 'for Soprano and Piano', year: 2024 },
    { title: 'Swirls in the Wind', instrumentation: 'for String Quartet', year: 2024 },
    { title: 'Path of Lamentation', instrumentation: 'for Symphony Orchestra or Brass Choir', year: 2023 },
    { title: 'Elysian Dreams', instrumentation: 'for Symphony Orchestra and Solo Cello', year: 2023 },
]

function Works() {
    return (
        <>
            <section className="section works" id="works">
                <div className="section__inner">
                    <div className="section__label">Works</div>
                    <h2 className="section__heading">Selected Recordings</h2>
                    <div className="works__grid">
                        {VIDEOS.map((v) => (
                            <VideoCard key={v.id + v.title} video={v} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section catalog" id="catalog">
                <div className="section__inner">
                    <div className="section__label">Catalog</div>
                    <h2 className="section__heading">Compositions</h2>
                    <table className="catalog__table">
                        <tbody>
                        {CATALOG.map((piece) => (
                            <tr key={piece.title} className="catalog__row">
                                <td className="catalog__title">{piece.title}</td>
                                <td className="catalog__instrumentation">{piece.instrumentation}</td>
                                <td className="catalog__year">{piece.year}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

function Contact() {
  return (
      <section className="section contact" id="contact">
        <div className="section__inner contact__inner">
          <div className="section__label"></div>
          <h2 className="section__heading">Contact</h2>
          <p className="contact__body">
            For commissions, engagements, or general inquiries, please reach out by email.
          </p>
          <a href={`mailto:${COMPOSER.email}`} className="contact__email">
            {COMPOSER.email}
          </a>
        </div>
      </section>
  )
}

function Footer() {
  return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} {COMPOSER.name}. All rights reserved.</p>
      </footer>
  )
}

export default function App() {
  return (
      <>
        <Nav />
        <Hero />
        <About />
        <Works />
        <Contact />
        <Footer />
      </>
  )
}



































//@todo fix the second subtitle (supertitle)

