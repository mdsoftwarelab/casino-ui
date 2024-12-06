import React from "react";
import './menu.css'

const Menu = () => {
    const menuItems = [
        {
            title: 'Home',
            url: '/home'
        },
        {
            title: 'Promotions',
            url: '/promotions'
        },
        {
            title: 'Games',
            url: '/games'
        },
        {
            title: 'Contact us',
            url: '/contact'
        }
    ]

    const isActive = (link) => {
        return window.location.href.includes(link) && "active"
    }

    return (
        <nav className="flex items-center justify-end h-full">
            {
                menuItems.map((item, key) => (
                    <a key={key} className={`main-menu-item ${isActive(item.url)}`} href={item.url}>{item.title}</a>
                ))
            }
        </nav>
    )
}

export default Menu;