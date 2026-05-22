import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Who am I?</h2>
          <p>
            Passionate web developer with 3 years of experience in creating modern and high-performance applications. Specialized in the React and Next.js ecosystem.
            I love turning ideas into concrete products that solve real user problems.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>React & Next.js</li>
                <li>JavaScript ES6+</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>API REST</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
