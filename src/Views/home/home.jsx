import React from "react";
import SidebarLayout from "../../Components/sidebar-layout/sidebar-layout";
import Promotions from "../../Components/promotions/promotions";

const Home = () => {
    return (
        <SidebarLayout sidebar={<Promotions />} content={"testing content"}/>
    )
}

export default Home;