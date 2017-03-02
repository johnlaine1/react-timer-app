import React from 'react';
import NavBar from './NavBar';

const App = (props) => {
    return (
      <div className="App">
        <NavBar/>
        {props.children}
      </div>
    );
  };

export default App;
