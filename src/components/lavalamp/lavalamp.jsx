import React from 'react'
import './lavalamp.css'

const lavalamp = () => {
  return (
    <div>
      <div class="glow"></div>
      <div class="frame">
        <div class="body-lamp">
          <div class="gooey">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>
        </div>
        <div class="base-lamp"></div>
      </div>
    </div>

  )
}

export default lavalamp