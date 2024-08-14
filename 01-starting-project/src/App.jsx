import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange tittle="Easy" targetTime={1}/>
        <TimerChallange tittle="Not easy" targetTime={5}/>
        <TimerChallange tittle="Getting tough" targetTime={10}/>
        <TimerChallange tittle="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
