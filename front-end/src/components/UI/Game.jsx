import React from "react";
import "./Game.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Game({ game_element, index }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function navigateToGuides(gameId) {
        navigate(`/guides/${gameId}`)
    }

    return (
        <div className="game-element" key={game_element.id}>
            <span className="game-row-item">name:{game_element.game_name}</span>
            <button className="game-row-item" onClick={() => navigateToGuides(game_element.id)}>show games guides</button>
        </div>

    );
}

export default Game;
