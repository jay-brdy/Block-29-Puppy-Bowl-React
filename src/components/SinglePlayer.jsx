import React from "react";

export function Player({ player, onClick, onDelete }) {
    return (
        <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.breed}</td>
            <td>
                <button onClick={() => onClick(player.id)}>View Player</button>
                <button onClick={() => onDelete(player.id)}>Delete Player</button>
            </td>
        </tr>
    );
}

export default Player;