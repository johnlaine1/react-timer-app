import React, {Component} from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class CountdownPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'count': null,
      'countdownStatus': 'stopped'
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      
      if (this.state.countdownStatus === 'started') {
        this.setState({count: newCount});
      }     
      
      if (this.state.count === 0) {
        this.setState({'countdownStatus': 'stopped'});
        clearInterval(this.timer);
      }

    }, 1000);
  }
  handleSetCountdown(seconds) {
    this.setState({
      'count': seconds, 
      'countdownStatus': 'started'
    });
    
  }
  render() {
    return (
      <div className="row">
        <div className="text-center">
          <Clock  seconds={this.state.count}/>
          <CountdownForm countdownStatus={this.state.countdownStatus} 
            onSetCountdown={this.handleSetCountdown.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default CountdownPage;