import React, {useState} from 'react';
import './Main.css'
import Tab from './Tabs';
import { Genre } from './Genre';
import Content from './Content';

const MainKeys = Genre.map(data => Object.keys(data).find(res => res !== 'id'));
// console.log(MainKeys);

export default function App(){
    //Lets get all the tabs names from the MainKey array
    const [tabs] = useState(MainKeys);

    // Lets have the first genre of the Mainkey array to be the activeTab
    //i.e It is gonn abe the 1st tab and its content that i see when i open the Project 
    const [activeTab, setActiveTab] = useState(MainKeys[0]);
    // console.log("Active Tab from Main:",activeTab);

    let index = tabs.indexOf(activeTab);
    const SubKeys = Object.keys(Genre[index][activeTab]);
    // console.log("SubKeys fon D&I:",SubKeys);

    return(
        <div className='MainCon'>
            <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Content SubKeys={SubKeys} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    );
} 