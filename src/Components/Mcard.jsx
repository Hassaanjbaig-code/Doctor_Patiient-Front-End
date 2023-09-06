import React, { useState } from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Mcard = (props) => {
  // console.log(Medicines)
  const { medicines } = props
  // const [Medicines, setMedicines] = useState([...medicines])
  const Medicines = medicines
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Medicines.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
        <Card sx={{ maxWidth: 345 }} style={{ "backgroundColor": "#0bd10b24" }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.des}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
          size="small"
          variant='contained'
          color='success'
          >
            Eaten
          </Button>
        </CardActions>
      </Card>
      </Grid>
      ))}
      </Grid>
    </Box>
  )
}

export default Mcard