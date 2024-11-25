'use client'
import React from 'react'
import { SocialTablistContainer } from './styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

const SocialTablist = () => {
  return (
    <SocialTablistContainer>
        <IconButton
            color='inherit'
            sx={{
                border: '1px solid #aaaaaa88', 
                borderRadius: "10px",
                fontSize: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8%",
                color: "black"
            }}
        >
            <InstagramIcon/> <p>Instagram</p>
        </IconButton>
        <IconButton
            color='inherit'
            sx={{
                border: '1px solid #aaaaaa88', 
                borderRadius: "10px",
                fontSize: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8%",
                color: "black"
            }}
        >
            <InstagramIcon/> <p>Facebook</p>
        </IconButton>
        <IconButton
            color='inherit'
            sx={{
                border: '1px solid #aaaaaa88', 
                borderRadius: "10px",
                fontSize: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8%",
                color: "black"
            }}
        >
            <InstagramIcon/> <p>Youtube</p>
        </IconButton>
        <IconButton
            color='inherit'
        >
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