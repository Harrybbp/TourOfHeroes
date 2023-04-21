import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const TopHeroItem = ({hero}) => {
  return (
    <Card variant='outlined'  sx={{padding:2, cursor:'pointer', minWidth: 200 }}>
    <CardContent>
        <Typography fontWeight='bold' variant='h6' textAlign='center'>
            {hero.id} {hero.name}
        </Typography>
    </CardContent>
</Card>
  )
}
