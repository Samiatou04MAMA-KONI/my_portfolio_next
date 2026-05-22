import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.content}>
        <div className={styles.about}>
            <h1 className={styles.title}>My Portfolio</h1>
            <p className={styles.description}>Passionate developer creating amazing web experiences.</p>
        </div>
        <div className={styles.navContainer}>
            <h1>Navigation</h1>
            <ul className={styles.nav}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/abouts">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className={styles.socialContainer}>
            <h1>Social Media</h1>
            <ul className={styles.social}>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
        </div>
    </div>
        <hr className={styles.separator} />
        <div className={styles.copy}>
            &copy; 2026 My Portfolio. All rights reserved.
        </div>
    </div>
  )
}
