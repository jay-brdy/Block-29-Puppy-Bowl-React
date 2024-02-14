import React from "react";

function PlayerDetails({ player }) {
    return (
        <div>
            <dialog open={player.id}>
                <h2>{player.name}</h2>
                <img src={player.imageUrl} alt={player.name} width={200} height={200} />
                <p>Breed: <strong>{player.breed}</strong></p>
            </dialog>
        </div>
    );
}

export default PlayerDetails;