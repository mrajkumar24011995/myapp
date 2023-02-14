import { Button } from '@mui/material'
import React from 'react'
import Base from '../Base/Base'

const DashBoard = () => {
    return(
       <Base
       tittle = "Welcome to Students App"
       description= "Please click below buton to home page"
       >
        <Button variant='outlined' 
        color='red'
        size ="large">
            Home
        </Button>

       </Base>
    )
}

export default DashBoard