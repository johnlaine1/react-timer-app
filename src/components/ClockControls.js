import React, {Component} from 'react';

class ClockControls extends Component {
  render() {
    let {countdownStatus} = this.props;
    return (
      <button 
        className="btn btn-primary btn-lg" 
        type="submit">
        {countdownStatus === 'stopped' ? 'Start' : 'Stop'}
      </button>   
    ); 
  }
}

export default ClockControls;
