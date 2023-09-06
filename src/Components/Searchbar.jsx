import React, { useState } from 'react'
import  Autocomplete  from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'

const Searchbar = (props) => {
  const { medicines, filterMedicine } = props
  return (
    <Stack sx={{ width: 300, margin: "auto", marginBottom: 2, marginTop: 2 }}>
      <Autocomplete
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
          title: event.target.value || value.name,
        })
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      noOptionsText={'No Medicine Found'}
      renderOption={(props, medicines) => (
        <Box component="li" {...props} key={medicines.id}>
          {medicines.name}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Search Medicine" />}
      />
    </Stack>
  )
}

export default Searchbar