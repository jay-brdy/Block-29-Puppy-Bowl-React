import React from "react";
import Player from "./SinglePlayer";

function AllPlayers({ players, onPlayerClick, onPlayerDelete}) {
    return (
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
    );
}

export default AllPlayers;