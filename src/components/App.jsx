import React, { useState } from 'react';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import FeedBack from './FeedBack/FeedBack';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    const name = e.target.name;
    switch (name) {
      case 'bad':
        setBad(bad => bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'good':
        setGood(good => good + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPosFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBack
          key={options}
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title='Statistic'>
        {countTotalFeedback() ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            posPercentage={countPosFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
