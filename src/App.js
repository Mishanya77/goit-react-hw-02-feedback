import React, { Component } from "react";
import Section from "./components/Section";
import FeedbackButtons from "./components/FeedbackButtons";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    getTotal: () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad
    },
    getPositivePercentage: () => {
      return Math.round(this.state.good / this.state.getTotal() * 100);
    }
  };

  handeleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: this.state[name] + 1
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButtons handeleClick={this.handeleClick} />  {/* children*/}
        </Section>
        {
          this.state.getTotal() === 0
            ? <Notification message="No feedback given" />
            : <Section title="STATISTIC">
              <Statistics
                {...this.state}
              />
            </Section>
        }


      </>
    );
  }
}

