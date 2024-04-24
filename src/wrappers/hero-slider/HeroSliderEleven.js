import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import HeroSliderElevenSingle from "../../components/hero-slider/HeroSliderElevenSingle";
import sliderData from "../../data/hero-sliders/hero-slider-eleven.json";
import PropTypes from "prop-types";
import clsx from "clsx"

const params = {
  effect: "fade",
  slidesPerView:1,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  pagination: true,
  autoHeight: false
};

const HeroSliderEleven = (
  spaceLeftClass,
  spaceRightClass,
  spaceBottomClass,
  spaceTopClass,
) => {
  return (
    <div className={clsx("slider-area", spaceLeftClass, spaceRightClass, spaceBottomClass,spaceTopClass)} style={{paddingTop:'0px',paddingLeft:'10px', paddingRight:'10px'}}>
      <div className="container">
        <div className="slider-active-3 slider-hm8">
          {sliderData && (
            <Swiper options={params} >
              {sliderData.map((single, key) => (
                <SwiperSlide key={key}>
                  <HeroSliderElevenSingle
                    data={single}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};
HeroSliderEleven.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass:PropTypes.string,
  spaceBottomClass:PropTypes.string,
};

export default HeroSliderEleven;
