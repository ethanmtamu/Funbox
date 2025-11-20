import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. IMPORT Outlet
// 2. REMOVE old "import { Router, Routes } from 'react-router';"


function CommunitiesIndex({user}) {
    return (
        <div className="community-container">
            <div className="verticalb-1">
                <div className="title-container">
                    <h1>Communities</h1>
                </div>
                {/* 3. The Outlet renders the nested component (CList or Feed) */}
                <Outlet context={{ user }}/> 
            </div>
            <div className='verticalb-2'> 
                {/* Additional content or components can be added here */}
                <div className='tab-container'>
                    <h1>Tabs</h1>
                </div>
                <div className='tab-content'>

                </div>
            </div>
        </div>
    );
}

export default CommunitiesIndex;