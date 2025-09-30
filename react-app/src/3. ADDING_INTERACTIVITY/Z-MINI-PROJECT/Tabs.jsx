import React from 'react';
import './Tabs.css'


export default function Tab({tabs, activeTab, setActiveTab}){
    return(
        <div className='TabCon'>
            {tabs.map(tab => (
                <button className={`btns ${activeTab === tab ? 'active' : ''}`} onClick={() =>setActiveTab(tab)} key={tab}>{tab}</button>
            ))
        }
        {/* {console.log("Active Tab from Tab.jsx : ",activeTab)} */}
        </div>
    );
} 