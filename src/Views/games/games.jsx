import React from 'react';
import './games.css'
import SidebarLayout from "../../Components/sidebar-layout/sidebar-layout";
import Promotions from "../../Components/promotions/promotions";
import GameList from "../../Components/game-list/GameList";

const Games = () => {
    return (
        <SidebarLayout sidebar={<Promotions />} content={<GameList />} />
    )
}

export default Games;