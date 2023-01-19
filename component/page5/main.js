import styles from 'styles/page5/main.module.css'

const Main = ({ c1, c2, c3, c4, c5, c6, c7, c8 }) => {
  return (
    <div className={styles.box}>
      <ul className={styles.btn}>
        <li>
          <h2><a href='#'>{c1}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c2}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c3}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c4}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c5}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c6}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c7}</a></h2>
        </li>
        <li>
          <h2><a href='#'>{c8}</a></h2>
        </li>
      </ul>
    </div>
  )
}

export default Main
