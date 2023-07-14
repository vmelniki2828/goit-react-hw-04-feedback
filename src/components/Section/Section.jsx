import PropTypes from 'prop-types'
import styles from './Section.module.css'

const Section = ({title, children}) => {
    return (
        <section className={styles.wigetSection}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default Section;