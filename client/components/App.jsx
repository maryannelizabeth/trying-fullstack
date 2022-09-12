import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RandomGenerator from './RandomPage'
import Home from './Home'
import Header from './Header'

import DiceHome from './Dice'
import RollOneDice from './RollOneDice'
import RollTwoDice from './RollTwoDice'
import RollThreeDice from './RollThreeDice'

import UserTimerInput from './UserTimerInput'
function App() {
  // function clickHandler()

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randomgenerator" element={<RandomGenerator />} />
        <Route path="/timer" element={<UserTimerInput />} />
        <Route path="/dice" element={<DiceHome />} />
        <Route path="/rollonedice" element={<RollOneDice />} />
        <Route path="/rolltwodice" element={<RollTwoDice />} />
        <Route path="/rollthreedice" element={<RollThreeDice />} />
      </Routes>
    </div>
  )
}

export default App
