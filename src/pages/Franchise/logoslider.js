import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import brandLogoData from "./brandlogo.json";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const settings = {
  loop: true,
  autoplay: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

const LogoSlider = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div className={clsx("brand-logo-area", spaceBottomClass, spaceTopClass)}>
      <Stack>
        <Typography
          sx={{
            color: "#1A1A1A",

            fontSize: { xs: "30px", md: "50px" },
            fontFamily: 'Libre Baskerville',
            textTransform: 'uppercase',
            textAlign: "center",
            pt:5,


          }}
        >
          OUR CLIENTS
        </Typography>
      </Stack>
      <div className="container mt-50 mb-100">
        <div className="brand-logo-active">
          {brandLogoData && (
            <Swiper options={settings}>
              {brandLogoData.map((single, key) => (
                <SwiperSlide key={key}>
                  <BrandLogoOneSingle data={single} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

LogoSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default LogoSlider;
