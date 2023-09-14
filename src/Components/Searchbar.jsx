import React, { useState } from 'react'
import  Autocomplete  from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'

const Searchbar = ( { medicines, filterMedicine, placeholder } ) => {
  // const= props
  return (
    <Stack sx={{ width: 300, margin: "auto", marginBottom: 2, marginTop: 2 }}>
      <Autocomplete
      freeSolo
      id='Search Medicine'
      getOptionLabel={(medicines) => medicines.name}
      options={medicines}
      sx={{ width: 300 }}
      onChange={(event, value) => {
        if (value === null) {
          filterMedicine(null)
          return;
        }
        filterMedicine({
          id: value.id,
          title: value.name,
        })
      }}
      isOptionEqualToValue={(option, value) => {
        option === value
      }}
      noOptionsText={'No Found'}
      renderOption={(props, medicines) => (
        <Box component="li" {...props} key={medicines.id}>
          {medicines.name}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
      />
    </Stack>
  )
}

export default Searchbar