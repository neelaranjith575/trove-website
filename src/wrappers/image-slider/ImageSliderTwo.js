
import Swiper, { SwiperSlide } from "../../components/swiper";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
import imageData from "../../data/image-slider/image-slider-two.json";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import clsx from "clsx"

const settings = {
  loop: false,
  grabCursor: true,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 3
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

const ImageSliderTwo = (
  spaceLeftClass,
  spaceRightClass,
  spaceBottomClass,
  spaceTopClass,
) => {
  return (
    <div style={{margin:'25px'}} className={clsx("slider-area", spaceLeftClass, spaceRightClass, spaceBottomClass,spaceTopClass)}>
      <div className="image-slider-active">
      <Typography sx={{fontSize: { xs: "30px", md: "50px" }, textAlign:'center', 
      mb:5, mt:10, fontWeight:500, textTransform:'uppercase',
      fontFamily: "Libre Baskerville",}}>
        WE'VE GOT JUST ABOUT EVERYTHING YOU NEED!</Typography>
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

ImageSliderTwo.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default ImageSliderTwo;
