'use client'
import { IconButton, TextField } from "@mui/material"
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
import DeleteIcon from '@mui/icons-material/Delete';
import SearchInput from "./components/SearchInput";
import { DatePicker, LocalizationProvider, pickersLayoutClasses } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

const HeaderContainer = styled.nav`
    min-height: 60px;
    height: fit-content;
    background-color: #ffff;
    border-bottom: 2px solid #aaaaaa;
    color: black;

    display: flex;
    align-items: center;
    padding: 0px 20px;
`
const Header = () => {
  return (
    <HeaderContainer>
        
        <CampañaNameEdit/>
        <span style={{color: "rgba(0, 0, 0, 0.38)"}}>|</span>
        <IconButton
            style={{color: "rgba(0, 0, 0, 0.8)"}}
        >
          <DeleteIcon/>
        </IconButton>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateRangePicker
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
            sx={{
              [`.${pickersLayoutClasses.contentWrapper}`]: {
                alignItems: 'center',
              },
            }}
          />
        </LocalizationProvider>
    </HeaderContainer>
  )
}

export default Header