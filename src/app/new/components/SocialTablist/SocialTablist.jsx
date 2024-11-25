'use client'
import React from 'react'
import { SocialTablistContainer } from './styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { TabIconButton } from '../Instagram/components/ProfileTablist/styles';

const SocialTablist = () => {
  return (
    <SocialTablistContainer>

        <TabIconButton style={{backgroundColor: "#8b8b8b58"}}>
            <InstagramIcon/> <p>Instagram</p>
        </TabIconButton>
        
        <TabIconButton>
            <InstagramIcon/> <p>Facebook</p>
        </TabIconButton>
        
        <TabIconButton>
            <InstagramIcon/> <p>Youtube</p>
        </TabIconButton>

        <IconButton>
            <AddCircleIcon
            sx={{
                width: "35px",
                height: "35px"
            }}
            />
        </IconButton>
    </SocialTablistContainer>
  )
}

export default SocialTablist