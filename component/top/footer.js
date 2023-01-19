import styles from 'styles/top/footer.module.css'

const Footer = ({ footer }) => {
  return (
    <div className={styles.back}>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  )
}
export default Footer
