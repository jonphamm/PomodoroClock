import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }

    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
  }

// increase session length button
  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }

// decrease session length button
  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }

// increase break length button
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

// decrease break length button
  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

// updates session timer when setting session length
onUpdateTimerMinute() {
  this.setState((prevState) => {
    return {
      timerMinute: prevState.timerMinute - 1
    }
  })
}

// switches timer from session length to break length
onToggleInterval(isSession) {
  if (isSession) {
    this.setState({
      timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
       timerMinute: this.state.breakLength
      })
    }
  }

  render() {
  return (
    <main>
      <h2>Pomodoro Clock</h2>
      <section className="interval-container">
        <SessionLength 
          sessionLength={this.state.sessionLength}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
        />
        <BreakInterval 
          breakInterval={this.state.breakLength} 
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
          />
      </section>
      <Timer 
      timerMinute={this.state.timerMinute} 
      breakLength={this.state.breakLength}
      updateTimerMinute={this.onUpdateTimerMinute}
      toggleInterval={this.onToggleInterval}
      />
    </main>
  );
  }
}

export default App;
