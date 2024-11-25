import React from 'react'
import { PublicationsContainer } from './styles'
import EmptyState from './components/EmptyState'

const Publications = () => {
  return (
    <PublicationsContainer>
      <EmptyState/>
    </PublicationsContainer>
  )
}

export default Publications