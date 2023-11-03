import React from 'react';
import './App.css';
import ScoreTableByPlayer from '../features/scoreTableByPlayer/ScoreTableByPlayer';
import logo from '../img/logo.png'

function App() {
  return (
    <div className="App">
      <img class="logoImg" src={logo} alt='7 Wonders Scorecard' />
      <ScoreTableByPlayer />

    </div>
  );
}

export default App;
