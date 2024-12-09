import React, {useState} from "react";
import './navbar.css'
import {menuItems} from "../../Posts/menu";
import Menu from "../menu/menu";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="header flex items-center justify-between">
                <div className="logo ml-2">
                    <img src="/images/logo.png" height="27" alt="logo"/>
                </div>
                <div className="mr-2">
                    <Menu toggleMenu={toggle}/>
                </div>
            </div>

            {
                showMenu && (
                    <div className="mt-1 mb-1">
                        {
                            menuItems.map((item, key) => (
                                <li className="mobile-menu-item" key={key}>
                                    <a href={item.url} className="mobile-menu-item">{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                )
            }

            <div className="border"></div>
        </>
    )
}

export default Navbar;