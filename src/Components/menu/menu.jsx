import React, {useState} from "react";
import './menu.css'
import {menuItems} from "../../Posts/menu";
import { ReactComponent as MenuIcon } from "./../../Assets/icons/menu.svg";

const Menu = ({toggleMenu}) => {


    const isActive = (link) => {
        return window.location.href.includes(link) && "active"
    }

    const toggle = () => {
        toggleMenu()
    }

    return (
        <>
            <nav className="menu">
                {
                    menuItems.map((item, key) => (
                        <a key={key} className={`main-menu-item ${isActive(item.url)}`} href={item.url}>{item.title}</a>
                    ))
                }
            </nav>

            <nav className="mobile-menu">
                <button onClick={toggle} className="btn-menu-tgl-sm">
                    <MenuIcon height="18" width="18"/>
                </button>
            </nav>
        </>
    )
}

export default Menu;