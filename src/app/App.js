import './App.css';
import ScoreTableByPlayer from '../features/scoreTableByPlayer/ScoreTableByPlayer';
import Options from '../features/options/Options';
import logo from '../img/logo.png'


function App() {
  return (
    <div className="App">
      <img src={logo} alt='7 Wonders Scorecard' />
      <ScoreTableByPlayer />
      <Options />
    </div>
  );
}

export default App;
