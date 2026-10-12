import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './Projects.css'
import Navbar from './Navbar'
import grietLogo from './assets/griet-logo.png'
import projectsFswLogo from "./assets/fswlogo-projects.png";
/* =========================================================
   FEATURED PROJECTS
   ========================================================= */

  const metavid = 'https://files.catbox.moe/43sypw.jpg'
//const recruitment = 'https://files.catbox.moe/bpsb3p.jpg'
//const rabbit = 'https://files.catbox.moe/ylzt32.jpg'
//const vivitsuProj = 'https://files.catbox.moe/u2enxt.jpg'
//const fswWebsite = 'https://files.catbox.moe/coibwg.jpg'
//const opensource = 'https://files.catbox.moe/0mtsd2.jpg'
const tablebot = 'https://files.catbox.moe/em4qfs.jpg'
const gitScavenger = 'https://files.catbox.moe/hghmta.jpg'
const grietStudySphere = 'https://files.catbox.moe/yt976w.jpg'
const satops = 'https://files.catbox.moe/kmpx52.jpg'
const ciris = 'https://files.catbox.moe/1v38mi.jpg'

const featuredProjects = [
  /*{
    title: 'FSW Recruitment',
    description:
      'A recruitment platform built for managing applications and community onboarding.',
    alt: 'FSW Recruitment Portal',
    tags: ['Web App', 'React', 'Flask'],
    image: recruitment,
    github: null,
  },
  */
  {
    title: 'MetaVid',
    description:
      'A collaborative digital media platform developed within the community to process and stream video content alongside rich contextual metadata. It enables video cataloging, timestamps, and open annotations.',
    alt: 'MetaVid',
    tags: ['AI', 'Computer Vision', 'Flask'],
    image: metavid, 
    github: 'https://github.com/akshaydev-git/Project-Metavid',
  },
  {
    title: 'CIRIS',
    description: 'A security intelligence and incident response tracker built to document vulnerabilities, correlate security events, and manage collaborative mitigation workflows.',
    alt: 'CIRIS',
    tags: ['TODO'],
    image: ciris,
    github: 'https://github.com/shaik-sohel-cyber/ciris',
  },
]

const projects = [
  /*{
    title: 'Rabbit',
    description:
      'A language assistant with translation, grammar checking, dictionary and summarization.',
    alt: 'Rabbit Language Assistant',
    tags: ['Python', 'Flask', 'AI'],
    image: rabbit,
    github: null,
  },
  {
    title: 'VIVITSU',
    description:
      'A national-level hackathon bringing students together to build innovative solutions.',
    alt: 'VIVITSU Hackathon',
    tags: ['Hackathon', 'Community'],
    image: vivitsuProj,
    github: null,
  },
  {
    title: 'FSW Website',
    description:
      'The digital home of the Free Software Wing community.',
    alt: 'FSW Website',
    tags: ['React', 'Web'],
    image: fswWebsite,
    github: null,
  },
  {
    title: 'Open Source',
    description:
      'Experiments, tools and contributions created by our community.',
    alt: 'Open Source Projects',
    tags: ['Open Source', 'Community'],
    image: opensource,
    github: null,
  },
  */
  {
    title: 'TableBot',
    description:
      'A Discord bot to create and manage tables in a server using simple commands.',
    alt: 'TableBot Discord Bot',
    tags: ['Discord Bot', 'Python'],
    image: tablebot,
    github: 'https://github.com/Subham8705/Table-DiscordBot',
  },
  {
    title: 'Git Scavenger Hunt',
    description:
      'An interactive, gamified workshop repository designed to introduce beginners to version control through hands-on challenges, branch switching, commit inspection, and pull requests.',
    alt: 'Git Scavenger Hunt',
    tags: ['Git', 'Game'],
    image: gitScavenger,
    github: 'https://github.com/Subham8705/git-scavenger-hunt',
  },
  {
    title: 'GRIET StudySphere',
    description:
      'A centralized academic repository created for GRIET students to access semester notes, reference PDFs, previous examination papers, and project documentation in one open space.',
    alt: 'GRIET StudySphere',
    tags: ['Web', 'Resources'],
    image: grietStudySphere,
    github: 'https://github.com/Subham8705/GRIET.StudySphere',
  },
  {
    title: 'satOps',
    description: 'A satellite tracking and operations utility engineered to process TLE orbital elements, compute ground-station tracking passes, and deliver clear visibility into spacecraft communication windows.',
    alt: 'satOps',
    tags: ['TODO'],
    image: satops,
    github: 'https://github.com/ShaikNada/satOps',
  },
]

function ProjectCard({ project }) {
  const cardContent = (
    <>
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.alt} />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-info-top">
          <h3>{project.title}</h3>

          <div className="project-meta">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <p>{project.description}</p>
      </div>
    </>
  );

  if (project.github) {
    return (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-card project-card-link"
        aria-label={`Open ${project.title} on GitHub`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className="project-card">
      {cardContent}
    </article>
  );
}

function Projects() {
  return (
    <div className="projects-page">

      {/* PROJECTS PAGE LOGO */}
      <Link to="/" className="site-logo projects-site-logo">
        <img
          src={grietLogo}
          alt="GRIET"
          className="site-logo-griet"
        />

        <div className="site-logo-griet-text">
          <span className="site-logo-griet-name">GRIET</span>

          <span className="site-logo-griet-full">
            GOKARAJU RANGARAJU
            <br />
            INSTITUTE OF ENGINEERING
            <br />
            &amp; TECHNOLOGY
          </span>
        </div>

        <span className="site-logo-divider" />

        <img
          src={projectsFswLogo}
          alt="FSW Logo"
          className="site-logo-icon"
        />

        <span className="site-logo-text">FSW</span>
      </Link>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main>
        <section className="project-hero">
          <div className="project-hero-content">
            <p className="eyebrow">
              FREE SOFTWARE WING · PROJECTS
            </p>

            <h1>
              Explore <em>Our</em> Projects
            </h1>

            <p className="hero-description">
              Discover the projects built by our community
              through code, creativity and open source.
            </p>
          </div>

          {/* FEATURED PROJECTS */}
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </section>

        {/* OTHER PROJECTS */}
        <section className="all-projects">
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


export default Projects