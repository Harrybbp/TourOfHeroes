import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'
import { HeroesPage } from '../pages/Heroes/HeroesPage'
import { HeroPage } from '../pages/Heroes/HeroPage'
import ResponsiveAppBar from '../components/Navbar'
import { Typography } from '@mui/material'

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Typography variant='h5' fontWeight='bold'>Tour of Heroes</Typography>
        <ResponsiveAppBar/>

        <Routes>
            <Route exact path='/' element={<DashboardPage/>}/>
            <Route exact path='/heroes/*' element={
            <Routes>
                <Route exact path='/' element={<HeroesPage/>} />
                <Route exact path='/:id' element={<HeroPage/>} />
            </Routes>}/>

        </Routes>
    </BrowserRouter>
  )
}
