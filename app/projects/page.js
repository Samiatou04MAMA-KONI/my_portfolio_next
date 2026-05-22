import Link from 'next/link'
import styles from './page.module.css'
import Tag from '@/components/Tag/Tag'
import projects from '@/data/project'

export const metadata = {
    title: 'Projects - My Portfolio',
    description: 'Discover the projects I\'ve worked on, showcasing my skills in web development and design.',
}

export default function Projects() {
  return (
    <div className= {styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.description}>
        Discover the projects I&apos;ve worked on, showcasing my skills in web development and design. Each project is a testament to my passion for creating innovative and user-friendly digital experiences.
      </p>
      
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} className={styles.card} key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
