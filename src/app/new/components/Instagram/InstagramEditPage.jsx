'use client'
import React from 'react'
import ProfileDesktop from './components/Profile/Profile'
import HistoriasDestacadas from './components/StorieHighlights/StorieHighlights'
import { ProfileContainer } from './styles'
import ProfileTablist from './components/ProfileTablist/ProfileTablist'
import Publications from './components/Publications/Publications'

const InstagramEditPage = () => {
  return (
    <div>
		  <ProfileContainer>
        <ProfileDesktop/>
        <HistoriasDestacadas/>
      </ProfileContainer>
      <ProfileTablist/>
      <Publications/>
	  </div>
  )
}

export default InstagramEditPage