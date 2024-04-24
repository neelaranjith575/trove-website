
import Swiper, { SwiperSlide } from "../../components/swiper";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
import imageData from "../../data/image-slider/image-slider-four.json";

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

const ImageSliderFour = () => {
  return (
    <div className="image-slider-area" style={{margin:'25px'}}>
      <div className="image-slider-active">
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

export default ImageSliderFour;
