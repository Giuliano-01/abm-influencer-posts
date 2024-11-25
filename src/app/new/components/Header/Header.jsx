'use client'
import { Button, IconButton, TextField } from "@mui/material"
import styled from "styled-components"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CheckIcon from '@mui/icons-material/Check';
import CampañaNameEdit from "./components/CampañaNameEdit";
import SearchInput from "./components/SearchInput";
import { DatePicker, DateTimePicker, LocalizationProvider, pickersLayoutClasses } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const HeaderContainer = styled.nav`
  position: sticky;
  top: 0px;
  border-radius: 15px 15px 0px 0px;
  min-height: 60px;
  height: fit-content;
  background-color: #ffff;
  color: black;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`
const Header = () => {
  return (
    <HeaderContainer>
        
      <CampañaNameEdit/>
      <Button variant="outlined">Guardar</Button>
      
    </HeaderContainer>
  )
}

export default Header