import PropTypes from 'prop-types';
import styles from './FeedBack.module.css'

const FeedBack = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
            <button
              className={styles.feedBackBtn}
              key={option}
              name={option}
              type='button'
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
        );
      })}
    </ul>
  );
};

FeedBack.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback : PropTypes.func.isRequired,
};

export default FeedBack;
