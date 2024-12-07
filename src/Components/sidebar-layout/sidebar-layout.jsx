import React from 'react';
import './sidebar-layout.css'

const SidebarLayout = ({ content, sidebar }) => {
    return (

        <div className="grid sidebar-layout h-full">
            <div className="h-full sidebar">
                <div className="ml-2 mt-1 mb-1 mr-2">
                    {sidebar}
                </div>
            </div>
            <div className="h-full background-img">
                {content}
            </div>
        </div>
    )
}

export default SidebarLayout;

