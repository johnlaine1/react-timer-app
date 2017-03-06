import React, {Component} from 'react';

class Controls extends Component {
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
  renderStartStopButton() {
    const {countdownStatus} = this.props;
    
    if (countdownStatus === 'started') {
      return <button onClick={this.onStatusChange('paused')} >Pause</button>;
    }
    if (countdownStatus === 'paused' || countdownStatus === 'stopped') {
      return <button onClick={this.onStatusChange('started')}>Start</button>;
    }
  }
  render() {
    return (
      <div>
        {this.renderStartStopButton()}
        <button onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    ); 
  }
}

export default Controls;
