import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PITreader from '../assets/Prods/PITreader.jpg'
import PSENslock from '../assets/Prods/PSENslock.jpg'
import PNOZmultiFSOE from '../assets/Prods/PNOZmulti_FSOE.jpg'

export default function SimplePaper() {
   
    return (
    <>
    <Typography variant='h3' textAlign={'center'} color={'gray'} sx={{mt:0}}>Yeni Ürünlerimiz</Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent:'center',
        borderRadius:'8',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 10,
          mb: 5,
          ml:5,
          mr:5,
          width: 390,
          height: 260,
        },
      }}
    >
      <Paper elevation={0} sx={{backgroundImage: `url(${PITreader})`,
        backgroundSize:'cover', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-evenly', 
        pl:3, 
        transition: 'box-shadow 0.3s ease-in-out', // Geçiş efekti için
        '&:hover': {boxShadow: '4px 4px 4px 4px '}}}> 
        <Typography variant='h4' color={'gray'}>PITreader</Typography>
        <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />} sx={{maxWidth:200, textAlign:'left', color:'gray',  transition: 'transform 0.3s ease-in-out', '&:hover': {transform: 'translateX(5px)'}}}>
            Ürünü İncele
        </Button>  
      </Paper>

      <Paper elevation={2} sx={{backgroundImage: `url(${PSENslock})`,
        backgroundSize:'cover', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-evenly', 
        pl:3, 
        transition: 'box-shadow 0.3s ease-in-out', // Geçiş efekti için
        '&:hover': {boxShadow: '4px 4px 8px 4px '}}}> 
        <Typography variant='h4' color={'gray'}>PITreader</Typography>
        <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />} sx={{maxWidth:200, textAlign:'left', color:'gray',  transition: 'transform 0.3s ease-in-out', '&:hover': {transform: 'translateX(5px)'}}}>
            Ürünü İncele
        </Button>  
      </Paper>

      <Paper elevation={4} sx={{backgroundImage: `url(${PNOZmultiFSOE})`,
        backgroundSize:'cover', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-evenly', 
        pl:3, 
        transition: 'box-shadow 0.3s ease-in-out', // Geçiş efekti için
        '&:hover': {boxShadow: '4px 4px 8px 4px '}}}> 
        <Typography variant='h4' color={'gray'}>PITreader</Typography>
        <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />} sx={{maxWidth:200, textAlign:'left', color:'gray',  transition: 'transform 0.3s ease-in-out', '&:hover': {transform: 'translateX(5px)'}}}>
            Ürünü İncele
        </Button>  
      </Paper>
    </Box>
    </>
  );
}