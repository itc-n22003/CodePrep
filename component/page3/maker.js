import styles from 'styles/page3/maker.module.css'

const Maker = ({ maker1, maker2, maker3, maker4, cruiser1, cruiser2, cruiser3, cruiser4, off1, off2, off3, off4, street1, street2, street3, street4, sport1, sport2, sport3, sport4 }) => {
  return (
    <div className={styles.box}>
      <ul className={styles.col}>
        <li>
          <h2 className={styles.h1}>{maker1}</h2>
          <ul className={styles.maker1}>
            <li>{cruiser1}</li>
            <li>{off1}</li>
            <li>{street1}</li>
            <li>{sport1}</li>
          </ul>
        </li>
        <li>
          <h2 className={styles.h2}>{maker2}</h2>
          <ul className={styles.maker2}>
            <li>{cruiser2}</li>
            <li>{off2}</li>
            <li>{street2}</li>
            <li>{sport2}</li>
          </ul>
        </li>
        <li>
          <h2 className={styles.h3}>{maker3}</h2>
          <ul className={styles.maker3}>
            <li>{cruiser3}</li>
            <li>{off3}</li>
            <li>{street3}</li>
            <li>{sport3}</li>
          </ul>
        </li>
        <li>
          <h2 className={styles.h4}>{maker4}</h2>
          <ul className={styles.maker4}>
            <li>{cruiser4}</li>
            <li>{off4}</li>
            <li>{street4}</li>
            <li>{sport4}</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
export default Maker
