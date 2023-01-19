import Link from 'next/link'
import styles from 'styles/top/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.back}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link legacyBehavior href='page1'><a>page1</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page2'><a>page2</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page3'><a>page3</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page4'><a>page4</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page5'><a>page5</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Hero
