import React from 'react'
import NavBar from '../Components/NavBar';
import DishCard from '../Components/DishCard';
import Stepper from '../Components/Stepper';
import Timeline from '../Components/Timeline'
import { Card, Typography } from '@mui/material';
import {Box} from '@mui/material';

function Home() {
  return (
    <div>
        <NavBar/>
        <div style={{margin:"10px", display:"flex", justifyContent:"space-evenly"}}>
          <DishCard/>
          <DishCard/>
          <DishCard/>
          {/* <Stepper/> */}
        </div>
        <hr/>
        <Card variant="outlined" sx={{width:"50%", margin:"auto", marginTop:"20px", marginBottom:"20px"}}>
         <Typography align='center'>Healthy Timeline</Typography>   
        <Timeline/>
        </Card>
      
    </div>
  )
}

export default Home