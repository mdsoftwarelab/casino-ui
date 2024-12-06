import React, {useState} from "react";
import './promotions.css'
import Card from "../card/card";

const Promotions = () => {
    const [isDaily, setIsDaily] = useState(true);

    const daily = () => {
        setIsDaily(true);
    }

    const weekly = () => {
        setIsDaily(false);
    }

    return (
        <div className="promotions">
            <div className="mb-1">
                <h1>PROMOTIONS</h1>
            </div>
            <div className="spacer"></div>
            <div className="mt-sm mb-sm">
                <button
                    onClick={daily}
                    className={`btn-secondary-tgl-sm ${isDaily && "btn-secondary-tgl-sm-active"}`}>
                    DAILY
                </button>
                <button
                    onClick={weekly}
                    className={`btn-secondary-tgl-sm ${!isDaily && "btn-secondary-tgl-sm-active"}`}>
                    WEEKLY
                </button>
            </div>
            <div className="spacer"></div>
            <div className="mt-sm mb-sm">
                <Card title={"Spin and win!!"} image={"/images/testPromo.png"} url={"/promotions"}/>
                <Card title={"Spin and win!!"} image={"/images/testPromo.png"} url={"/promotions"}/>
            </div>
        </div>
    )
}

export default Promotions;