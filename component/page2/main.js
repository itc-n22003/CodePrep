import Link from 'next/link'
import styles from 'styles/page2/main.module.css'

const Main = ({ u1, u2, u3, u4, u5, n1, n2, n3, n4, n5 }) => {
  return (
    <ul className={styles.nav}>
      <li>
        <Link legacyBehavior href={u1}><a>{n1}</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={u2}><a>{n2}</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={u3}><a>{n3}</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={u4}><a>{n4}</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={u5}><a>{n5}</a></Link>
      </li>
    </ul>
  )
}

export default Main
