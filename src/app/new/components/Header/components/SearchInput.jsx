import { FormControl, Input, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <FormControl variant="standard">
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
        />
    </FormControl>
  )
}

export default SearchInput