'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Box, IconButton, TextField } from "@mui/material"
import styled from "styled-components"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const CampañaNameEdit = () => {

    const [isInputDisabled, setIsInputDisabled] = useState(true)
    const inputRef = useRef(null)

    useEffect(() => {
        if (!isInputDisabled && inputRef.current) {
            inputRef.current.firstChild.focus();
            inputRef.current.firstChild.select();
        }
    }, [isInputDisabled]);

    return (
        <Box>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <Input
                    id="standard-adornment-password"
                    type={true ? 'text' : 'password'}
                    disabled={isInputDisabled}
                    ref={inputRef}
                    value="Nueva Campaña"
                    onBlur={()=>{setIsInputDisabled(!isInputDisabled)}}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    true ? 'hide the password' : 'display the password'
                                }
                                style={{color: "rgba(0, 0, 0, 0.8)"}}
                                onClick={()=>{setIsInputDisabled(!isInputDisabled)}}
                            >
                                {isInputDisabled ? <DriveFileRenameOutlineIcon /> : <CheckIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <span style={{color: "rgba(0, 0, 0, 0.38)"}}>|</span>
            <IconButton style={{color: "rgba(0, 0, 0, 0.8)"}}>
              <DeleteIcon/>
            </IconButton>
        </Box>
    )
}

export default CampañaNameEdit