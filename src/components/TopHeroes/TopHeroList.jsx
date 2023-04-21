import React, { useContext } from 'react';
import { Container  } from '@mui/material';
import { HeroContext } from '../../HeroContext';
import { TopHeroItem } from './TopHeroItem';
import { Link } from 'react-router-dom';

export const TopHeroList = () => {

    const {topHeroes} = useContext(HeroContext);

  return (
    <Container maxWidth='xl' sx={{display:'flex', gap:1, flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap', marginTop:2}}>
      
        {
            topHeroes.map((hero)=> 
            <Link key={hero.id} to={`/heroes/${hero.id}`}>
                <TopHeroItem hero={hero}/>
            </Link>
            )
        }
   
    </Container>
  )
}
