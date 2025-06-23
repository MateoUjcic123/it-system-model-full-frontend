import { useState } from 'react'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Trigger area in top-right corner */}
      <div
        className={styles.trigger}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        ☰
      </div>

      {/* Sidebar itself */}
      <div
        className={`${styles.sidebar} ${isHovered ? styles.visible : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.appName}>Red Team App</div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </>
  )
}
