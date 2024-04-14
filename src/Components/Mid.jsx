import React from 'react'
import ReactPlayer from 'react-player'
import { Grid, Typography } from '@mui/material';
import announce from '../assets/pilz-home.jpg'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import playIcon from '../assets/playIcon2.png'

const opts = {
    height: '440',
    width:'655',
    playerVars: {
      autoplay: 1,
    },
  };

  function CustomListItem({text}) {
    return (
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" disablePadding sx={{width: '100%', maxWidth: 530}}>
        <ListItemIcon style={{ color: 'orange' }}>
            <TaskAltIcon/>
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  }

function Mid(){
  // className='p-32 flex justify-evenly'
    return(
    <Grid container direction={"row"} rowSpacing={'60px'}  sx={{
      p:10,
      justifyContent:'center'
    }} >
      <Grid item xs={12} sm={12} lg={7} container spacing={4}  direction={'row'} alignItems={'center'} >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} alignItems={'center'} sx={{position:'relative'}}>
            <ReactPlayer style={{objectFit:'cover'}} height={'450px'} width={'660px'} controls='true' url='https://www.youtube.com/watch?v=GXBNv-eaQoU' light='true' playing='true' pip='true'
            playIcon={<img src={playIcon} alt="Play Icon" style={{width:'100%', borderRadius:6}} />}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10} xl={10} container spacing={4}>
            <Grid item>
                <Typography variant='h4'>Otomasyonda Emniyet ve Güvenliği Şansa Bırakmayın</Typography>
            </Grid>
            <Grid item>
                <Typography textAlign={'justify'}>Bilişim Teknolojileri (IT) sistemi üzerinden makinenize izinsiz erişimin ihtimali bulunması halinde en iyi koruma veya erişim kontrolü bile değerini yitirir. 
                      Bu noktada hem makine emniyeti hem de endüstriyel koruma sunabilen bütünsel bir emniyet konseptine ihtiyaç duyulur. 
                      Herhangi bir emniyet açığının ortaya çıkması durumunda, kalite kaybı ve beklenmedik arıza süreleri olası senaryolardan sadece ikisidir. 
                      Bu nedenle, tesis ve makinelerin dışarıdan gelen saldırılara karşı, sadece yetkili personelin kontrol sistemlerine erişimi ve bunları yönetme yetkisi olacağı şekilde korunması çok daha önemlidir. 
                </Typography> 
            </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid container item xs={12} sm={12} md={12} lg={5} sx={{ display:'flex', justifyContent:'center', width:'100%'}}>
          <Grid item sx={{position:'relative'}}>
            <img  src={announce} alt="" style={{height:'760px', width:'560px', borderRadius:6}} />
          </Grid>
          <Grid item xs={7} sm={12} md={12} lg={4} container color={'white'} direction={'column'} alignItems={'center'}  sx={{color:'white', pl:-1, pt:4, pb:4, position:'absolute'}} >
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor"/>
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor" />
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor"/>
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor"/>
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor"/>
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor"/>
            <Grid item component={CustomListItem} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida lectus at velit aliquam tempor"/>
          </Grid>
      </Grid>
    </Grid>
    );
}

export default Mid;