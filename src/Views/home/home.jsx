import React from "react";
import './home.css'
import SidebarLayout from "../../Components/sidebar-layout/sidebar-layout";
import Promotions from "../../Components/promotions/promotions";
import Banner from "../../Components/banner/banner";
import GameList from "../../Components/game-list/GameList";


const Home = () => {
    return (
        <SidebarLayout sidebar={<Promotions />} content={
            <>
                <Banner />
                <GameList />
            </>
        }
      />

        // <SidebarLayout sidebar={<Promotions />} content={"content"} />

    )
}

export default Home;