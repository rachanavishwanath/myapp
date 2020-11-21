
import './App.css';
import Root from './Components/root';
import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <withRouter> */}
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      {/* </withRouter> */}
    </div>
  );
}

export default App;
