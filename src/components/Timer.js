import React, {Component} from 'react';
import Clock from './Clock';
import Controls from './Controls';

class TimerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      countdownStatus: 'stopped'
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const {countdownStatus} = this.state;
    if (prevState.countdownStatus !== countdownStatus) {
      switch (countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case 'stopped':
          clearInterval(this.timer);
          this.timer = undefined;
          this.setState({count: 0});
          break;
        default:
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({'count': newCount});
    }, 1000);
  }
  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }
  render() {
    return (
      <div className="text-center">
        <Clock seconds={this.state.count}/>
        <Controls
          countdownStatus={this.state.countdownStatus}
          onStatusChange={this.handleStatusChange.bind(this)}/>
      </div>
    );
  }
}

export default TimerPage;