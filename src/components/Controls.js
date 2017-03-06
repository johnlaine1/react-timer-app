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
      return <button className="btn btn-info"onClick={this.onStatusChange('paused')} >Pause</button>;
    }
    if (countdownStatus === 'paused' || countdownStatus === 'stopped') {
      return <button className="btn btn-primary"onClick={this.onStatusChange('started')}>Start</button>;
    }
  }
  render() {
    return (
      <div>
        {this.renderStartStopButton()}
        <button className="btn btn-default"onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    ); 
  }
}

export default Controls;
