import Link from 'next/link'
import styles from 'styles/page1/hero.module.css'

const Hero = ({ title, subtitle, url1, url2, name1, name2 }) => {
  return (
    <div className={styles.back}>
      <div className={styles.main}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}<Link legacyBehavior href={url1}><a target='_blank'>{name1}</a></Link></p>
        <p className={styles.subtitle}>{subtitle}<Link legacyBehavior href={url2}><a target='_blank'>{name2}</a></Link></p>
      </div>
    </div>
  )
}

export default Hero
