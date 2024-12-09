import React from "react";
import './gameList.css'
import {gamesList} from "../../Posts/games";
import Card from "../card/card";

const GameList = () => {
    return (
        <div className="mt-1 mb-1">
            <h2>GAMES <span className="ml-sm accent"> > </span></h2>
            <div className="border-btm mt-1 mb-1"></div>
            <div className="flex game-list-container gap-20 justify-between">
                {
                    gamesList.map((game, index) => (
                        <div key={index} className="mt-1 test">
                            <Card url={game.gameUrl} title={game.title} image={game.image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GameList