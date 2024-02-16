import React from "react";

function Filter({ value, onChange }) {
    return (
        <div className="filter">
            <label htmlFor="filter">Search: </label>
            <input type="text" name="filter" value={value} onChange={onChange} />
        </div>
    );
}

export default Filter;