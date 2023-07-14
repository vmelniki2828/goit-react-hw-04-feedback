import React from 'react';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import FeedBack from './FeedBack/FeedBack';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  };

  countPosFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedBack
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              posPercentage={this.countPosFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
