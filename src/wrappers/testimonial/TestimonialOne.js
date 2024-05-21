import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

// swiper slider settings
const settings = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 5000,
  
  

};

const TestimonialOne = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  testimonialClass,
}) => {
  return (
    <div className={clsx("testimonial-area", spaceTopClass, spaceBottomClass, spaceLeftClass, spaceRightClass, bgColorClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
          <Stack sx={{height:{xs:'800px', md:'550px'}}}>
          <div className="testimonial-active nav-style-1 nav-testi-style" >
        <Typography
          sx={{
            color: "#1A1A1A",
            fontSize: { xs: "30px", md: "50px" },
            fontFamily: 'Libre Baskerville',
            textTransform: 'uppercase',
            textAlign: "center",
            pt:2,
            pb:5
          }}
        >
          CLIENT REVIEWS
        </Typography>
    
              {testimonialData && (
                <Swiper options={settings}>
                  {testimonialData.map((single, key) => (
                      <SwiperSlide key={key} >
                        <TestimonialOneSingle
                          data={single}
                          testimonialClass={testimonialClass}
                        />
                      </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialOne.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string
};

export default TestimonialOne;
