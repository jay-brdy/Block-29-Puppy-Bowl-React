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

export function PlayerDetails({ player }) {
    return (
        <dialog open={player.id}>
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} width={200} height={200} />
        </dialog>
    );
}