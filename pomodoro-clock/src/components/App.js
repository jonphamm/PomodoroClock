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
  }
  render() {
  return (
    <div className='container'>
      <h2>Pomodoro Clock</h2>
      <section className="interval-container">
        <SessionLength sessionLength={this.state.sessionLength}/>
        <BreakInterval BreakInterval={this.state.breakLength}/>
      </section>
      <Timer timerMinute={this.state.timerMinute}/>
    </div>
  );
  }
}

export default App;
