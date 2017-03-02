import React, {Component} from 'react';


class Clock extends Component {
  static defaultProps = {
    seconds: 555
  }
  
  static propTypes = {
    seconds: React.PropTypes.number
  }
  
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    
    return `${minutes}:${seconds}`;
  }
  render() {
    let {seconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(seconds)}</span>
      </div>
    );
  }
}


export default Clock;