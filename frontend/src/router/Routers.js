import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import RareSpecies from '../pages/RareSpecies'
import RareSpeciesDetails from '../pages/RareSpeciesDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import Explore from '../pages/Explore'
import Instruction from '../pages/Instruction'
import Challenge from '../pages/Challenge'
import News from '../pages/News'
import InstructionDetails from '../pages/InstructionDetails'
import Homepage from '../pages/homepage/Homepage'
import Activities from '../pages/Activities'
import ChallengeDetails from '../pages/ChallengeDetails'
import ActivitiesDetails from '../pages/ActivitiesDetails'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/explore' element={<Explore />} />

        <Route path='explore/rare-species' element={<RareSpecies/>} />
        <Route path='explore/rare-species/:id' element={<RareSpeciesDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/login/:id' element={<Homepage />} />
        <Route path='/register' element={<Register/>} />
        <Route path='explore/rare-species/search' element={<SearchResultList/>} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/challenge' element={<Challenge />} />
        <Route path='/explore/news' element={<News />} />
        <Route path='/instruction/:id' element={<InstructionDetails />} />
        <Route path='activities' element={<Activities />}/>
        <Route path='challenge/:hashtag' element={<ChallengeDetails/>} />
        <Route path='/activities/:id' element={<ActivitiesDetails />} />

    </Routes>
  )
}

export default Routers