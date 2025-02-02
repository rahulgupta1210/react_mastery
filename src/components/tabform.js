import React, { useState } from 'react'

const Tabform = () => {

    const [activeTab,setActiveTab] = useState(0)

    const tabConfig = [
        {
            name: 'profile',
            component: 'ProfileComponent'
        },
        {
            name: 'interest',
            component: 'InterestComponent'
        },
        {
            name: 'setting',
            component: 'SettingComponent'
        }
    ]
    const ActiveTabComponent = tabConfig[activeTab].component;
    return (
        <div>

            <div className='tab-container'>
                {
                    tabConfig.map((tab, index) => {
                        return (<div key={index} className='tab-header' onClick={()=>setActiveTab(index)}>{tab.name}</div>)
                    })
                }

            </div>
            <div className='tab-body'>
               <ActiveTabComponent/>
            </div>

        </div>
    )
}

export default Tabform