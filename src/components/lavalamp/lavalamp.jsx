import React, {useEffect} from 'react'
import './lavalamp.css'

const lavalamp = () => {
  return (
    <div>
      <div class="glow"></div>
      <div class="frame">
        <div class="container">
          <div class="gooey">
            <div class="bubbleTop"></div>
            <div class="bubbleBot"></div>
            <div class="bubbleWrapper" id="wrap1">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper" id="wrap2">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper" id="wrap3">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper" id="wrap4">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper" id="wrap5">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper" id="wrap6">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default lavalamp