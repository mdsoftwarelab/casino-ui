import React from "react";
import SidebarLayout from "../../Components/sidebar-layout/sidebar-layout";
import Promotions from "../../Components/promotions/promotions";
import Banner from "../../Components/banner/banner";


const Home = () => {
    return (
        <SidebarLayout sidebar={<Promotions />} content={<Banner />}
      />
    
    )
}

export default Home;