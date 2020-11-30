
import './App.css';
import Root from './Components/root';
import React from 'react';
import { BrowserRouter, withRouter, HashRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <withRouter> */}
        <HashRouter>
          <Root />
        </HashRouter>
      {/* </withRouter> */}
    </div>
  );
}

export default App;
