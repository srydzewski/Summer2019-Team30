import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="/test" method="get">
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
