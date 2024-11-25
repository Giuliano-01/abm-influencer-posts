'use client'
import React from 'react'
import ProfileDesktop from './components/Profile/Profile'
import HistoriasDestacadas from './components/StorieHighlights/StorieHighlights'
import { InstagramEditPageContainer, ProfileContainer } from './styles'
import ProfileTablist from './components/ProfileTablist/ProfileTablist'
import Publications from './components/Publications/Publications'

const InstagramEditPage = () => {
  return (
    <InstagramEditPageContainer>
		  <ProfileContainer>
        <ProfileDesktop/>
        <HistoriasDestacadas/>
      </ProfileContainer>
      <ProfileTablist/>
      <Publications/>
	  </InstagramEditPageContainer>
  )
}

export default InstagramEditPage