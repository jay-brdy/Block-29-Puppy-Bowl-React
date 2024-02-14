import React from "react";

function Form({ onSubmit }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newPlayer = Object.fromEntries(formData.entries());
        onSubmit(newPlayer);
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <label htmlFor="breed">Breed: </label>
        <input type="text" name="breed" />
        <button type="submit">Add Player</button>
      </form>
    )
}

export default Form;