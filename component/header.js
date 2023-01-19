import styles from 'styles/header.module.css'
const Header = ({ title }) => {
  return (
    <header className={styles.header}>{title}</header>
  )
}
export default Header