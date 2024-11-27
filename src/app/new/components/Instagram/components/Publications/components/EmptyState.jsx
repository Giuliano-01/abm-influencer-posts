import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { Button } from '@mui/material';
import { ButtonContainer, EmptyStateContainer } from './styles';
import IconButton from '@mui/material/IconButton';

const EmptyState = ({setOpenModal}) => {

    return (
        <EmptyStateContainer>
            <h2>Programa tu feed de fotos</h2>
            <IconButton
                color='inherit'
                sx={{border: '1px solid white'}}
                onClick={()=>setOpenModal(true)}
            >
                <CameraAltOutlinedIcon sx={{width: "70px",height: "70px"}} />
            </IconButton>
            <p>Cuando programes fotos, aparecerán en tu perfil en la fecha y hora que elijas.</p>
            <ButtonContainer>
                <Button size="small" sx={{textTransform: 'none'}}> Programa tu primera foto </Button>
            </ButtonContainer>
        </EmptyStateContainer>
    )
}

export default EmptyState