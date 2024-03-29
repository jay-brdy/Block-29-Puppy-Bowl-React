import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers, getPlayer, createPlayer, deletePlayer } from "./API/index";
import PlayerDetails from "./components/PlayerDetails";
import Form from "./components/NewPlayerForm";
import Filter from "./components/Filter";
import AllPlayers from "./components/AllPlayers";

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [filter, setFilter] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  // Function to sort players by createdAt property in descending order
  const sortPlayersByCreatedAt = (playersArray) => {
    return playersArray.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  useEffect(() => {
    getPlayers().then((players) => {
      const sortedPlayers = sortPlayersByCreatedAt(players);
      setPlayers(sortedPlayers);
      setFilteredPlayers(sortedPlayers);
    });
  }, []);

  // Update filtered players whenever players or filter changes
  useEffect(() => {
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(filter.toLowerCase()) ||
      player.breed.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [players, filter]);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  // Delete function
  function handlePlayerDelete(playerId) {
    deletePlayer(playerId).then(() => {
      getPlayers().then((players) => {
        setPlayers(sortPlayersByCreatedAt(players));
      });
    });
  }

  // New Player Form Submitting
  function handleSubmit(newPlayer) {
    createPlayer(newPlayer).then(() => {
      getPlayers().then((players) => {
        setPlayers(sortPlayersByCreatedAt(players));
      });
    });
  }



  // Filter function
  function handleFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <div onClick={() => setPlayer({})}>
      <h1>Puppy Bowl</h1>
      <PlayerDetails player={player} />
      <Form onSubmit={handleSubmit} />
      <Filter value={filter} onChange={handleFilter} />
      <AllPlayers players={filteredPlayers} onPlayerClick={handlePlayerClick} onPlayerDelete={handlePlayerDelete} />
    </div>
  );
}

export default App;