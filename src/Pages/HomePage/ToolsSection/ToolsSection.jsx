import styles from './ToolsSection.module.css'
import ToolCard from './ToolCard/ToolCard'

const ToolsSection = ({ section }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{section.toolSection}</h2>
      <div className={styles.toolsGrid}>
        {section.tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default ToolsSection
