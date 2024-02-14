import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers, getPlayer, createPlayer, deletePlayer} from "./API/index";
import { Player } from "./components/SinglePlayer";
import { PlayerDetails } from "./components/SinglePlayer";

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
    event.preventDefault();
    const formData = new FormData(event.target);
    const newPlayer = Object.fromEntries(formData.entries());

    createPlayer(newPlayer).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });

    // Clear form after submitted
    event.target.reset();
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <div onClick={() => setPlayer({})}>
      <h1>Puppy Bowl</h1>
      <PlayerDetails player={player} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="breed">Breed:</label>
        <input type="text" name="breed" />
        <button type="submit">Add Player</button>
      </form>
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <Player
                key={player.id}
                player={player}
                onClick={handlePlayerClick}
                onDelete={handlePlayerDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;