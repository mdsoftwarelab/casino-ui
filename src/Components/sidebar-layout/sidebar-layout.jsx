import React from 'react';
import './sidebar-layout.css'

const SidebarLayout = ({ content, sidebar }) => {
    return (

        <div className="flex sidebar-container h-full">
            <div className="sidebar h-full">
                <div className="ml-2 mt-1 mb-1 mr-2">
                    {sidebar}
                </div>
            </div>
            <div className="sidebar-content background-img h-full">
                <div className="ml-lg mt-1 mb-1 mr-lg">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default SidebarLayout;

