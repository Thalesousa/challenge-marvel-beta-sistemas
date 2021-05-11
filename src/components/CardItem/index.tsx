import styles from './styles.module.scss';


export function CardItem({hero}) {
  return (
    <li key={hero.id} className={styles.card}>
      <a href="#">
        <img
          width={256}
          height={256}
          src={hero.thumbnail.path +'.'+ hero.thumbnail.extension}
          alt={hero.name}
        />
        <div className={styles.overlay}>
          <div className={styles.header}>
            <h2>{hero.name}</h2>
          </div>
          <span>Saiba mais ➞</span>
        </div>
      </a>
    </li>
  )
}