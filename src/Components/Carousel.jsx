import { useEffect, useState } from "react";
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import one from "../assets/Carousel/1.png"
import two from "../assets/Carousel/2.png"
import three from "../assets/Carousel/3.png"


function Carousel(){
    return( 
        <CCarousel dark
        pause={"hover"}
        interval={2000} //2saniye
        controls
        indicators
        transition="crossfade"
        >
        <CCarouselItem>
          <CImage className="d-block w-100" src={one} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={two} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={three} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    );
}

export default Carousel;