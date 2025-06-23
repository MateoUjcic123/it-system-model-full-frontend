import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Team Red. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer