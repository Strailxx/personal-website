import React, {useContext} from 'react';
import {DarkModeContext} from '../../context/darkmodecontext';
import './lightswitch.css'

const lightswitch = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div className="lightswitch">
            <img src={darkMode ? `../../assets/lightswitch.png` : `../../assets/lightswitch.png`} alt = "lightswitch" onClick = {handleClick}/>
        </div>
    )
}
  
export default lightswitch