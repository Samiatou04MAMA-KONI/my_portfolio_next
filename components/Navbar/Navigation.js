'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useState } from 'react'

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
 return (
   <nav className={styles.nav}>
     <div className="container">
       <Link href="/" className={styles.logo} onClick={closeMenu}>
          My Portfolio
        </Link>

        {/* Bouton burger pour mobile */}
        <button 
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
        </button>

       <ul className={styles.menu}>
         <li>
           <Link href="/" className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}>
             Home
           </Link>
         </li>
         <li>
           <Link href="/projects" className={pathname === '/projects' ? `${styles.link} ${styles.active}` : styles.link}>
             Projects
           </Link>
         </li>
         <li>
           <Link href="/abouts" className={pathname === '/abouts' ? `${styles.link} ${styles.active}` : styles.link}>
             About
           </Link>
         </li>
         <li>
            <Link href="/formations" className={pathname === '/formations' ? `${styles.link} ${styles.active}` : styles.link}>
              Training
            </Link>
         </li>
         <li>
           <Link href="/contact" className={pathname === '/contact' ? `${styles.link} ${styles.active}` : styles.link}>
             Contact
           </Link>
         </li>
       </ul>
     </div>
   </nav>
 )
}