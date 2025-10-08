import { useLocation } from 'react-router-dom'
import styles from './ShowText.module.css'

const ShowText = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const text = queryParams.get('text') || 'No text provided.'

  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        {text.split('\n').map((line, index) => (
          <p key={index} className={styles.line}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ShowText
