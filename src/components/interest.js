import React from 'react'

const Interest = ({data,setData}) => {

    const handleDataChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            interests: e.target.checked ? [...prevState.interests, e.target.name]
                : prevState.interests.filter((i) => i !== e.target.name)
        }));
    };

   const {interests} = data; 
  return (
    <div>
        <div>
            <label>
                <input type="checkbox" id="interest" name="interest"  checked={interests?.includes('coding')} onChange={handleDataChange}/>
                Coding
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" id="cricket" name="cricket"  checked={interests?.includes('music')} onChange={handleDataChange}/>
                Music
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" id="cricket" name="cricket"  checked={interests?.includes('js')} onChange={handleDataChange}/>
                JS
            </label>
        </div>
    </div>
  )
}

export default Interest