import React from 'react'
import { ProfileTablistContainer } from './styles'
import { Button } from '@mui/material'
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const ProfileTablist = () => {
  return (
    <ProfileTablistContainer>
      <div
        style={{borderTop: "1px solid white"}}
      >
        <Button 
          size="small"
          startIcon={<GridOnIcon />}
          sx={{color: 'white'}}
        >
          PUBLICACIONES
        </Button>
      </div>
      <div
        style={{}}
      >
        <Button 
          size="small"
          startIcon={<BookmarkIcon />}
          sx={{color: 'gray'}}
        >
          GUARDADO
        </Button>
      </div>
      <div
        style={{}}
      >
        <Button 
          size="small"
          startIcon={<AssignmentIndIcon />}
          sx={{color: 'gray'}}
        >
          ETIQUETAS
        </Button>
      </div>
    </ProfileTablistContainer>
  )
}

export default ProfileTablist