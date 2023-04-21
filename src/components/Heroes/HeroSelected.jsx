import { Button, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { HeroContext } from '../../HeroContext';
import { Link } from 'react-router-dom';

export const HeroSelected = () => {

    const {selectedHero} = useContext(HeroContext);

  return (
    <Container maxWidth='xxl' >
      {
        !selectedHero? 
        <Typography>There is no hero selected</Typography>
        :
        <>
          <Typography variant='h5' > {selectedHero.name} is my Hero</Typography>
          <Button variant='contained'>
              <Link to={`/heroes/${selectedHero.id}`}>View details</Link>
          </Button>
        </>
        }
    </Container>
  )
}
