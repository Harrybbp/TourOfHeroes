import { Container, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroContext } from '../../HeroContext';
import { HeroForm } from '../../components/Heroes/HeroForm';

export const HeroPage = () => {

  const {id} = useParams();
  const { findHero, selectedHero} = useContext(HeroContext);
  useEffect(() => findHero(id), [id]);
  return (
    selectedHero &&
    <Container  maxWidth='xxl' >
      <HeroForm hero={selectedHero}/>
    </Container>
  )
}
