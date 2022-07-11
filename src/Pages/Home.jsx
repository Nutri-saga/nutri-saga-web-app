import React from 'react'
import NavBar from '../Components/NavBar';
import DishCard from '../Components/DishCard';
import Stepper from '../Components/Stepper';

import { Card, Typography } from '@mui/material';
import {Box} from '@mui/material';

function Home() {
  return (
    <div>
        <div style={{margin:"10px", display:"flex", justifyContent:"space-evenly"}}>
          <Stepper/>
        </div>
    </div>
  )
}

export default Home