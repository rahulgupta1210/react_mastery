import React, { useState } from 'react';
import Profile from './Profile';
import Interest from './Interest';
import Setting from './Setting';



const Tabform = () => {
    const [data ,setData] =useState({
        name:'',
        age:29,
        email:'rahul@gmail.com',
        interests:['code','music','js'],
        theme:"dark"
    })
    const [activeTab, setActiveTab] = useState(0);

    const tabConfig = [
        {
            name: 'Profile',
            component: Profile
        },
        {
            name: 'Interest',
            component: Interest,
        },
        {
            name: 'Setting',
            component: Setting,
        }
    ];

    const ActiveTabComponent = tabConfig[activeTab].component;

    const handlePrevClick =()=>{

    }

    const handleNextClick =()=>{

    }

    const handleSubmitClick =()=>{

    }

    return (
        <div>
            <div className='tab-container'>
                {tabConfig.map((tab, index) => (
                    <div key={index} className={`tab-header ${activeTab === index ? 'active' : ''}`} onClick={() => setActiveTab(index)}>{tab.name}</div>
                ))}
            </div>
            <div className='tab-body'>
              <ActiveTabComponent data={data} setData ={setData}/>
            </div>
            <div>
                {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
                {activeTab < tabConfig.length-1 && <button onClick={handleNextClick}>Next</button>}
                {activeTab === tabConfig.length-1 && <button onClick={handleSubmitClick}>Submit</button>}
            </div>
        </div>
    );
};

export default Tabform;
        