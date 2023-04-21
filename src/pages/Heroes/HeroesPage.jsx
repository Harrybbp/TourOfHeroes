import { Container, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { HeroList } from '../../components/Heroes/HeroList'
import { HeroSelected } from '../../components/Heroes/HeroSelected'
import { HeroContext } from '../../HeroContext'

export const HeroesPage = () => {

  const { setSelectedHero} = useContext(HeroContext);
  useEffect(() => {
    setSelectedHero(null)
  }, [])
  

  return (
    <Container sx={{marginTop: 2, flexGrow:1, display:'flex', flexDirection:'column'}} maxWidth="xxl">
      <Typography variant='h4' textAlign='start'  fontWeight='bold' >My Heroes</Typography>
      <HeroList/>
      <HeroSelected/>
  </Container>
  )
}
