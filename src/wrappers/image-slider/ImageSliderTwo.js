
import Swiper, { SwiperSlide } from "../../components/swiper";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
import imageData from "../../data/image-slider/image-slider-two.json";
import { Typography } from "@mui/material";

const settings = {
  loop: false,
  grabCursor: true,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 6,
      
    }
  }
};

const ImageSliderTwo = () => {
  return (
    <div className="image-slider-area" style={{margin:'25px'}}>
      <div className="image-slider-active">
      <Typography sx={{fontSize:'50px', textAlign:'center', mb:5, mt:10, fontWeight:500, textTransform:'uppercase',fontFamily: "Cinzel",}}>Latest and On-Trending Tiles</Typography>
        {imageData && (
          <Swiper options={settings}>
            {imageData.map((single, key) => (
              <SwiperSlide key={key}>
                <ImageSliderOneSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ImageSliderTwo;
