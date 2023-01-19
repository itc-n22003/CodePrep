import Link from 'next/link'
import styles from 'styles/page4/main.module.css'

const Main = ({ title, message, url1, name1, url2, name2, url3, name3, url4, name4, url5, name5, url6, name6 }) => {
  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <nav className={styles.nav}>
          <h2 className={styles.h2}>{message}</h2>
          <ul>
            <li>
              <Link legacyBehavior href={url1}><a target='_blank' className={styles.a}>{name1}</a></Link>
            </li>
            <li>
              <Link legacyBehavior href={url2}><a target='_blank' className={styles.a}>{name2}</a></Link>
            </li>
            <li>
              <Link legacyBehavior href={url3}><a target='_blank' className={styles.a}>{name3}</a></Link>
            </li>
            <li>
              <Link legacyBehavior href={url4}><a target='_blank' className={styles.a}>{name4}</a></Link>
            </li>
            <li>
              <Link legacyBehavior href={url5}><a target='_blank' className={styles.a}>{name5}</a></Link>
            </li>
            <li>
              <Link legacyBehavior href={url6}><a target='_blank' className={styles.a}>{name6}</a></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Main
