import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SinglePlayer from "./SinglePlayer";

function AllPlayers() {
    return (
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<SinglePlayer />} />
          </Routes>
        </div>
    );
}

export default AllPlayers;