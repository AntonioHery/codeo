import { Avatar, Grid } from '@mui/material'
import React from 'react'
import Styledbutton from '../component/button/styledbutton'
import './home.css'

const Home = () => {
  return (
    <div className='container'>
        <div className='content1'>
            <Styledbutton>+Nouveau Utilisateur</Styledbutton>
        </div>
        <div className='content2'>
           <div className='part1'>
            <div className='avatar'>
                <Avatar/>
            </div>
           </div>
           <div className='part2'>
            
            </div>
        </div>
    </div>
  )
}

export default Home