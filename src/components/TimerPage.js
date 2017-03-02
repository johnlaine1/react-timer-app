import React, {Component} from 'react';
import Clock from './Clock';

class TimerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: 121
    };
  }
  render() {
    return (
      <div>
        <div>TimerPage Component</div>
        <Clock />
      </div>
    );
  }
}

export default TimerPage;