import styles from './page.module.css'
import Image from 'next/image'
import projects from '@/data/project'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    const { slug } = await params
    const project = projects.find((project) => project.slug === slug)
    if (!project) {
        return {
            title: 'Project Not Found - My Portfolio',
            description: 'The project you are looking for does not exist.',
            openGraph: {
                title: 'Project Not Found - My Portfolio',
                description: 'The project you are looking for does not exist.',
                images: [
                    {
                        url: '/images/not-found.jpg',   
            }],
        }
    }
}
    return {
        title: `${project.title} - My Portfolio`,
        description: project.description,
    }
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params
  // Next.js passe automatiquement le slug dans params
  const project = projects.find((project) => project.slug === slug)

  // Si le projet n'existe pas, afficher un message
  if (!project) {
      notFound()
  }

  return (
      <div className={styles.container}>
        <Link href="/projects" className={styles.backLink}>
            ← Back to Projects
        </Link>
          <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.content}>
              <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                      <Image 
                      src={`/images/${project.slug}.jpg`} 
                      alt={project.title} 
                      className={styles.image}
                      width={400} 
                      height={200}
                      />
                  </div>
              </div>

              <div className={styles.details}>
                  <h2>Technologies Used</h2>
                  <div className={styles.technologies}>
                      {project.tags.map((tech, index) => (
                          <span key={index} className={styles.tech}>
                              {tech}
                          </span>
                      ))}
                  </div>

                  <div className={styles.links}>
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                      >
                          View Code →
                      </a>
                      <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.link} ${styles.linkPrimary}`}
                      >
                          View Demo →
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
   return projects.map((project) => ({
       slug: project.slug,
   }))
}