import React from 'react';
import logo from './logo.svg';
import './App.css';

import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
      <div className="App">
        <header className="App-header">

          <p>
            Ben Graves
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </HttpsRedirect>
  );
}

export default App;
