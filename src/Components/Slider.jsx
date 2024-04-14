import slider from "../assets/pilz-slider2.png"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Slider(){
    return(
    <>
    <div class="flex realtive mt-4 items-center">
        <img src={slider} alt="Pilz" class="w-full h-auto"/>
        <div class="container  absolute flex items-center justify-between left-1/2 -translate-x-1/2 h-full w-full">
            <div class="text-white pl-8">
                <div>
                    <Typography class="text-xs md:text-lg lg:text-xl xl:text-3xl">En Doğru Seçimi Pilz Uzmanlarıyla Seçin</Typography>
                </div>
                <div>
                    <Typography class="text-xs md:text-lg lg:text-xl xl:text-3xl">+90 216 577 55 50</Typography>
                </div>
            </div>
            <div class="p-5">
                <Button variant="contained" sx={{backgroundColor:'white', color:'black', '&:hover': {
                        backgroundColor: 'darkgray'},width: '100%', // Butonun genişliği
                        height: '20px', // Butonun yüksekliği
                        fontSize:'6px',
                        '@media (min-width:700px)': { // Responsive boyutlandırma
                        height: '40px', fontSize:'14px'}, borderRadius:'8px'}} size="medium">
                        Hemen İletişİme Geçİn
                </Button>
            </div>
        </div>
    </div>
    </>
    );
}
export default Slider;