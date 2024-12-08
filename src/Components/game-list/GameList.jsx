import React from "react";
import {gamesList} from "../../Posts/games";
import Card from "../card/card";
import './GameList.css';

const GameList = () => {
    return (
        <div className="mt-1 mb-1 mr-lg ml-lg">
            <h2>GAMES <span className="ml-sm accent"> > </span></h2>
            <div className="border-btm mt-1 mb-1"></div>
            <div className="grid g-25 game-grid">
                {
                    gamesList.map((game, index) => (
                        <div key={index} className="w-75 mt-1">
                            <Card url={game.gameUrl} title={game.title} image={game.image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GameList