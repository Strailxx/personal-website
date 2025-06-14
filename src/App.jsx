import React, {useState} from 'react'
import Lavalamp from './components/lavalamp/lavalamp'
import {DarkModeProvider} from './context/darkmodecontext'
import Lightswitch from './components/lightswitch/lightswitch'

const App = () => {
  return (
    <div>
      <DarkModeProvider>
        <Lightswitch/>
        <Lavalamp/>
      </DarkModeProvider>
    </div>

  )
}

export default App