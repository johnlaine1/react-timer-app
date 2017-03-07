import React, {Component} from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class CountdownPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'count': null,
      'countdownStatus': 'stopped'
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const {countdownStatus} = this.state;
    if (countdownStatus !== prevState.countdownStatus) {
      switch (countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({'count': 0});
          /* falls through */
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;

        this.setState({count: newCount >= 0 ? newCount : 0});
        
        if (newCount === 0) {
          this.setState({countdownStatus: 'stopped'});
        }

    }, 1000);
  }
  handleSetCountdown(seconds) {
    this.setState({
      'count': seconds, 
      'countdownStatus': 'started'
    });
    
  }
  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }
  render() {
    const {count, countdownStatus} = this.state;
    const renderControlArea = () => {
      if (countdownStatus === 'stopped') {
        return (
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>  
        );
      } else {
        return (
          <Controls onStatusChange={this.handleStatusChange.bind(this)} countdownStatus={countdownStatus}/>  
        ); 
      }
    };
    
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4">
          <div className="thumbnail text-center">
            <h2>Countdown Timer</h2>
            <Clock  seconds={count}/>
            {renderControlArea()}
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownPage;