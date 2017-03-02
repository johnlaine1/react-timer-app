import React, {Component} from 'react';
import Clock from './Clock';

class CountdownPage extends Component {
  render() {
    return (
      <div>
        <div>CountdownPage Component</div>
        <Clock seconds={129}/>
      </div>
    );
  }
}

export default CountdownPage;