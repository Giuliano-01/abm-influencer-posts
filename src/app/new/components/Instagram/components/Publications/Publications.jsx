import React, { useState } from 'react'
import { PublicationsContainer } from './styles'
import EmptyState from './components/EmptyState'
import ModalProgramPost from '../ModalProgramPost/ModalProgramPost'

const Publications = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <PublicationsContainer>
      <EmptyState setOpenModal={setOpenModal}/>
      <ModalProgramPost open={openModal} handleClose={setOpenModal}/>
    </PublicationsContainer>
  )
}

export default Publications