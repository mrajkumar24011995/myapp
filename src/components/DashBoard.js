import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'

const DashBoard = () => {
    const history = useHistory();
    return(
       <Base
       tittle = "Welcome to Students App"
       description= "Please click below buton to home page"
       >
        <br/>
        <Button variant='outlined' 
        color='red'
        size ="large"
        onClick={()=>history.push("/details")}
        >
        Students Page
        </Button>

       </Base>
    )
}

export default DashBoard