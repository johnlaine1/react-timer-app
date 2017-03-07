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
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.setState({'count': this.state.count + 1});
    }, 1000);
  }
  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4">
          <div className="thumbnail text-center">
            <h2>Timer</h2>
            <Clock seconds={this.state.count}/>
            <Controls
              countdownStatus={this.state.countdownStatus}
              onStatusChange={this.handleStatusChange.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerPage;