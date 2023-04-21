import React, { useContext } from 'react'
import { HeroContext } from '../../HeroContext';
import { Avatar, Card, CardContent, CardHeader, Container, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { HeroItemList } from './HeroItemList';

export const HeroList = () => {
    const {heroes} = useContext(HeroContext);

  return (
    <Container maxWidth='xxl' >
  
    {
        heroes.map((hero)=> 
            <HeroItemList key={hero.id} hero={hero}  />
        )
    }
  
</Container>
  )
}
