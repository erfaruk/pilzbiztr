// FooterExample.js
import React, { useContext } from 'react';
import { Button, Footer, ResponsiveContext, Text } from 'grommet';
import {Instagram,X,Facebook,Linkedin,Youtube} from 'grommet-icons'
import { Box, Grid, Typography } from "@mui/material";
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight'; // Sağa doğru ok ikonu
import logo from '../assets/pilz-logo.png'

// Özel ikonlu liste öğesi bileşeni
function CustomListItem({ text, secondaryText, href, icon }) {
  let iconComponent;
  if (icon === 'phone') {
      iconComponent = <PhoneIcon />;
  } else if (icon === 'mail') {
      iconComponent = <MailIcon />;
  } else if (icon === 'location') {
      iconComponent = <LocationOnIcon />;
  } else if (icon === 'arrow') {
      iconComponent = <ArrowRightIcon />;
  }
  return (
    <ListItem button component="a" href={href} target="_blank" rel="noopener noreferrer" disablePadding sx={{width: '100%', maxWidth: 260}}>
      <ListItemIcon style={{ color: 'orange' }}>
          {iconComponent}
      </ListItemIcon>
      <ListItemText primary={text}  secondary={secondaryText}/>
    </ListItem>
  );
}

function Footers(){
 
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Instagtram', icon:Instagram, href:"https://www.instagram.com/pilzturkiye?igsh=MXVyY295b2E3dGl0dw=="},
    { label: 'Facebook', icon:Facebook, href:"https://www.facebook.com/pilzturkiye/"},
    { label: 'X', icon:X , href:"https://twitter.com/pilzturkiye"},
    { label: 'Linkedin', icon:Linkedin, href:"https://www.linkedin.com/company/pilz-t%C3%BCrkiye/"},
    { label: 'Youtube', icon:Youtube , href:"https://www.youtube.com/@PilzTR"}

  ];

  return (
    <>
    <Box
      sx={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))', // İlgili gradient renk kodları 
      pt: 5, pb: 8, pl: 10, pr: 10 }}
      component="footer"
    >
      <Grid container  spacing={4} >
      <Grid item lg={4} md={6} sm={6} xs={12} key={4} direction={"column"} container spacing={2} color={'white'} >
            <Grid item>
                <div className='w-36'>
                    <img src={logo} alt="pilz logo" />
                </div>
            </Grid>
            <Grid item>
                <Typography>
                    Emniyet Otomasyonunun mucidi Pilz 1948 yılında Hermann Pilz tarafından Almanya’da kuruldu. 
                    1968 yılında Dünya’nın ilk çift el emniyet rölesini pazara sunduğu günden bugüne 
                    Pilz icat ettiği Emniyet Otomasyonu konusunda ileri teknoloji üreten, ürün ve hizmetler 
                    geliştiren sektöründe lider bir şirket haline geldi.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} key={4} direction={"column"} container spacing={2}>
          <Grid item>
            <Typography component="h6" variant="h6" color="orange" noWrap
                sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
                Faydalı Linkler
            </Typography>
          </Grid>
          <Grid item container rowSpacing={0} direction={"column"} color={"white"}>
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Hakkımızda" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Ürün Haberleri" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Basın" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Pilz’de Kariyer" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="İletişim" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="İnsan Kaynakları" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="E-Shop" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Pilz Global" href="https://www.google.com" icon="arrow" />
          </Grid>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} key={4} direction={"column"} container spacing={2}>
          <Grid item>
            <Typography component="h6" variant="h6" color="orange" noWrap sx={{ flexGrow: 1, fontWeight: "bold" }}>
                Yasal Yönlendirme
            </Typography>
          </Grid>
          <Grid item container rowSpacing={0} direction={"column"} color={"white"}>
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Yasal Uyarılar" href="https://www.google.com" icon="arrow" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Site Kullanım Koşulları" href="https://www.google.com" icon="arrow" />
          </Grid>
        </Grid>
        <Grid item lg={2} md={6} sm={6} xs={12} key={4} direction={"column"} container spacing={2}>
          <Grid item>
            <Typography
              component="h6" variant="h6" color="orange" noWrap sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              İletişim
            </Typography>
          </Grid>
          <Grid item container rowSpacing={1} direction={"column"} color={'white'} >
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="+90 216 577 55 50" href="https://www.google.com" secondaryText="İstanbul Genel Müdürlük" icon="phone" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="info@pilz.com.tr" href="https://www.google.com" secondaryText="Pilz Destek" icon="mail" />
            <Grid item xs={12} sm={6} md={4} lg={3} component={CustomListItem} text="Kayışdağı Mah. Dudullu Yolu Cad. Mecnun Sk No:7 Duru Plaza" secondaryText="Ataşehir / İSTANBUL - TÜRKİYE" href="https://www.google.com" icon="location" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Footer
      background="black"
      direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
      align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      fill="horizontal"
    >
      <Box
        direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap="xsmall"
      >
        <Typography size="xsmall">
          &copy; {year} PILZ | Tüm Hakları Saklıdır Pilz Türkiye – IT Department
        </Typography>
      </Box>
      <Box
        direction="row"
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap="xsmall"
        wrap
      >
        {footerLinks.map(link => (
          <Button  key={link.label}  icon={<link.icon />} href={link.href} />
        ))}
      </Box>
    </Footer>
    </>
  );
};
export default Footers;