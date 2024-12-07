import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Views/home/home";
import App from "./App";
import Games from "./Views/games/games";

const RoutingLayer = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="games" element={<Games />} />
                <Route path="promotions" element={<h1>Promotions</h1>} />
                <Route path="contact" element={<h1>Contact</h1>} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default RoutingLayer;