import React from 'react';
import logo from './logo.svg';
import './App.css';
import { parseDateString } from './parser/parser';

function App() {
  let result = parseDateString("2021-2-1", "C#")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <body>
        <h1>{result}</h1>
      </body>
    </div>
  );
}

export default App;
