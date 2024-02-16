import React from "react";
import Player from "./SinglePlayer";

function AllPlayers({ players, onPlayerClick, onPlayerDelete}) {
    return (
        <table>
        <thead>
          <tr>
            <th className="fixed-width-column">Name</th>
            <th className="fixed-width-column">Breed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <Player
                key={player.id}
                player={player}
                onClick={onPlayerClick}
                onDelete={onPlayerDelete}
              />
            );
          })}
        </tbody>
      </table>
    );
}

export default AllPlayers;