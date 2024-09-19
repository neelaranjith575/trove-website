import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper/index.jsx";
import categoryData from "./projectdata.json";
import ProjectSliderSingle from "./projectslidersingle.js";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const settings = {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 3,
    },
    // 992: {
    //   slidesPerView: 4
    // },
  },
};

const ProjectSlider = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div data-aos="fade-in"
    data-duration="5000"
    data-aos-anchor-placement="top-center"   
    className={clsx("collections-area", spaceTopClass, spaceBottomClass)}>
      <div className="container mt-30" 
                data-aos="fade-in"
                data-duration="5000"
                data-aos-anchor-placement="top-center"  >
        {/* section title
        <SectionTitleFour titleText="Collections" spaceBottomClass="mb-40" /> */}
        <Stack>
          <Typography
            sx={{
              color: "#1A1A1A",
              
                         fontSize: { xs: "30px", md: "50px" },
                        fontFamily: 'Libre Baskerville',
                        textTransform: 'uppercase',
              textAlign: "center",
              pb: 4,
            }}
          >
            Projects
          </Typography>
        </Stack>
        <div  className="collection-wrap">
          <div className="collection-active">
            {categoryData && (
              <Swiper options={settings}>
                {categoryData.map((single, key) => (
                  <SwiperSlide key={key}>
                    <ProjectSliderSingle data={single} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProjectSlider;
