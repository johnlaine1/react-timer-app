import React, {Component} from 'react';
import Controls from './Controls';

class CountdownForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.refs.secondsInput.value;
    
    if (strSeconds.match(/^[0-9]*$/) ) {
      this.props.onSetCountdown(parseInt(strSeconds, 10));
      this.refs.secondsInput.value = '';
    }
  }
  render() {
    return (
      <div className="countdown-form">
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input placeholder="Enter time in seconds" ref="secondsInput" type="text"/>
          </div>
          <button 
            className="btn btn-primary btn-lg" 
            type="submit">
            Start
          </button>
        </form>
      </div>
    );
  } 
}

export default CountdownForm;