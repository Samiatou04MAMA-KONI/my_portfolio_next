import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hello, I am <span className={styles.highlight}>Samiatou MAMA KONI</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Full-Stack Web Developer
        </p>
        <p className={styles.heroDescription}>
          I create modern, responsive web applications using Next.js, React, and Node.js. With a passion for clean code and user-centric design, I build seamless digital experiences that solve real-world problems.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            View My Projects
          </Link>
          
          <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
};