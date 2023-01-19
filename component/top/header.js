import styles from 'styles/top/header.module.css'

const Header = ({ title }) => {
  return (
    <div className={styles.back}>
      <header className={styles.header}>{title}</header>
    </div>
  )
}
export default Header
