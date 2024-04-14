import Header from "../Components/Header.jsx";
import Carousel from "../Components/Carousel.jsx";
import Slider from "../Components/Slider.jsx";
import Mid from "../Components/Mid.jsx"
import NewProds from "../Components/NewProds.jsx"
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";


function Home () {
    return(
        <>
        <Header></Header>
        <Carousel></Carousel>
        <Slider></Slider>
        <Mid></Mid>
        <NewProds></NewProds>
        <Contact></Contact>
        <Footer></Footer>  
            
        </>
    );
}
export default Home;
