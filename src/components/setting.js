import React from 'react'

const Setting = ({data,setData}) => {
    const {theme} = data;

    const handleDataChange =(e)=>{
        setData((prevState)=>({
            ...prevState,theme:e.target.name
        }))
    }
  return (
    <div>
         <div>
            <label>
                <input type="radio" id="interest" name="dark"  checked={theme === 'dark'} onChange={handleDataChange}/>
                Dark
            </label>
        </div>
        <div>
            <label>
                <input type="radio" id="interest" name="light"  checked={theme === 'dark'} onChange={handleDataChange}/>
                Light
            </label>
        </div>
    </div>
  )
}

export default Setting