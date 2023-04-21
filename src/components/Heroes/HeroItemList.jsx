import React, { useContext } from 'react'
import { Avatar, Button, Card, CardContent, Paper, Typography } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import { HeroContext } from '../../HeroContext';


export const HeroItemList = ({hero}) => {

 const {name, id} = hero;
 const {selectedHero,  setSelectedHero} = useContext(HeroContext);
 const isHeroActive = selectedHero === hero;

  return (
 

        <Paper  sx={{ maxWidth: 200, marginBottom:1, marginTop:1, cursor:'pointer' }}    onClick={()=> {
            setSelectedHero(hero)
        }
        }  variant='outlined'  >
            <CardContent sx={{display:'flex', alignItems:'center', gap:1, flexDirection:'row'}}>
                <Avatar sx={{ bgcolor:isHeroActive? blue[500] :  grey[500],  width: 25, height: 25}} >
                    <Typography fontSize={14} fontWeight={isHeroActive && 'bold' } >{id}</Typography>
                </Avatar>
                <Typography fontSize={14} fontWeight={isHeroActive && 'bold' } >{name}</Typography>
            </CardContent>
        </Paper>
  )
}
