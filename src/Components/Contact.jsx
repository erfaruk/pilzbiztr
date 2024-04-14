import {Grid, Button, Typography} from '@mui/material'
import bg from '../assets/pilz-contact.jpg'

const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '46vh', // Sayfanın tamamını kaplamak için
    display: 'flex',
    alignItems: 'center', // Dikey olarak ortalamak için
    mt:15,
  };

function Contact(){
    return(
        <Grid container spacing={4} direction={'column'} color={'white'}  sx={styles}>
            <Grid item sx={{ml:10,mr:10}} >
                <Typography variant='h3' textAlign={'center'}>
                        Uzman Desteğine mi İhtiyacınız Var?
                </Typography>
            </Grid>
            <Grid item sx={{ml:10,mr:10}}>
                <Typography variant='h6' textAlign={'center'}>
                Pilz Türkiye ekibi tüm soru, görüş, fikir ve önerileriniz; destek taleplerinizi karşılamak için bekliyor olacak. Hemen şimdi iletişime geçin ve endüstriyel servis ve ürünlerimizle işletmenizi kara geçirin.
                </Typography>
            </Grid>
            <Grid item sx={{mb:6}}>
                <Button variant='primary' sx={{backgroundColor:'orange'}}>Hemen İletişime Geçin</Button>
            </Grid>
        </Grid>
    );
}

export default Contact;