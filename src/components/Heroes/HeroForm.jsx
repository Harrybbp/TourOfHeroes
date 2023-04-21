import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import { HeroContext } from '../../HeroContext';
import { Input } from '@mui/icons-material';

export const HeroForm = ({hero}) => {

  const navigate = useNavigate();
  const {updateHero} = useContext(HeroContext);
  const [name, setName] = useState(hero.name);
  const handleTextChange = (event) => {
      setName( event.target.value);
      updateHero(hero.id, {...hero, name: event.target.value});
  }
  
  useEffect(() => {
    setName(hero.name)
  }, [hero])
  

  return (
    <form>

    <Container sx={{marginTop:1}} maxWidth='xxl'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={8}>
              <Typography fontWeight='bold'>Id: </Typography>
              <Typography >{`${hero.id}`}</Typography>
            </Grid>
  <Grid item xs={8}>
              <Typography fontWeight='bold'>Name: </Typography>
              <TextField
     hiddenLabel
     id="filled-hidden-label-small"
     variant="filled"
     size="small"
      value={name}
      onChange={handleTextChange}
    />
  </Grid>



            
      </Grid>
      <Button sx={{marginTop:1}} onClick={() => navigate(-1)}>
       Back
    </Button>
    </Container>
                </form>
  )
}
