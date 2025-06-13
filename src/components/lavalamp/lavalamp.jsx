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
            <div class="bubbleWrapper">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper">
              <div class="bubble"></div>
              <div class="bubble"></div>
              <div class="bubble"></div>
            </div>
            <div class="bubbleWrapper">
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