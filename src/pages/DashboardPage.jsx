import { Container, Typography } from '@mui/material'
import React from 'react'
import { TopHeroList } from '../components/TopHeroes/TopHeroList'

export const DashboardPage = () => {
  return (
    <Container sx={{marginTop: 2, flexGrow:1, display:'flex', flexDirection:'column'}} maxWidth="xxl">
      <Typography variant='h4' textAlign='center'  fontWeight='bold' >Top Heroes</Typography>
      <TopHeroList/>
    </Container>
  )
}
