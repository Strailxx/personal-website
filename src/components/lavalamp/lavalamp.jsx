import React, {useContext} from 'react'
import './lavalamp.css'
import {DarkModeContext} from '../../context/darkmodecontext'



const lavalamp = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div>
      
      <div className="glow"></div>
      <div className="frame">
        <div className="container">
          <div className="gooey">
            <div className="bubbleTop"></div>
            <div className="bubbleBot"></div>
            <div className="bubbleWrapper" id="wrap1">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
            <div className="bubbleWrapper" id="wrap2">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
            <div className="bubbleWrapper" id="wrap3">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
            <div className="bubbleWrapper" id="wrap4">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
            <div className="bubbleWrapper" id="wrap5">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
            <div className="bubbleWrapper" id="wrap6">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
            <div className="bubbleWrapper" id="wrap7">
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
              <div className={darkMode ? `bubble bubble-dark` : `bubble bubble-light`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default lavalamp