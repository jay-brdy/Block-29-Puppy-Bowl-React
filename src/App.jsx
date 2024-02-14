import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers, getPlayer, createPlayer, deletePlayer} from "./API/index";
import { Player } from "./components/SinglePlayer";
import { PlayerDetails } from "./components/SinglePlayerDetails";
import Form from "./components/NewPlayerForm";
import Filter from "./components/Filter";
import AllPlayers from "./components/AllPlayers";

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [filter, setFilter] = useState("");

  useEffect (() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  function handlePlayerDelete(playerId) {
    deletePlayer(playerId).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  function handleSubmit(event) {
    createPlayer(newPlayer).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <div onClick={() => setPlayer({})}>
      <h1>Puppy Bowl</h1>
      <PlayerDetails player={player} />
      <Form onSubmit={handleSubmit} />
      <Filter value={filter} onChange={handleFilter} />
      <AllPlayers players={players} onPlayerClick={handlePlayerClick} onPlayerDelete={handlePlayerDelete} />
    </div>
  );
}

export default App;