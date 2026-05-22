import styles from './page.module.css'
import formations from '@/data/formation'
import Link from 'next/link'

export const metadata = {
    title: 'Training and Certifications - My Portfolio',
    description: 'Discover my training and the skills I have acquired through various courses and certifications. Each formation represents a step in my journey to becoming a skilled web developer, showcasing my commitment to continuous learning and professional growth.',
}

export default function Formation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Formations</h1>
      <p className={styles.description}>Here are my formations.</p>
      <div className={styles.grid}>
        {formations.map((formation) => (
          <Link href={`/formations/${formation.form}`} className={styles.card} key={formation.id}>
            <h2 className={styles.cardTitle}>{formation.title}</h2>
            <p className={styles.cardDescription}>{formation.description}</p>
            <p className={styles.cardDetail}><strong>Year :</strong> {formation.date}</p>
            <p className={styles.cardDetail}><strong>Durée :</strong> {formation.duration}</p>
            <p className={styles.cardDetail}><strong>Institution :</strong> {formation.institution}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
