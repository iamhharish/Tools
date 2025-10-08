import { Link } from 'react-router-dom'
import styles from './ToolCard.module.css'

const ToolCard = ({ tool }) => {
  return (
    <Link to={tool.link} className={styles.card}>
      <h3 className={styles.name}>{tool.name}</h3>
      <p className={styles.description}>{tool.description}</p>
    </Link>
  )
}

export default ToolCard
