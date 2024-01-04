import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import categoryData from "./projectdata.json";
import ProjectSliderSingle from "./projectslidersingle.js";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const settings = {
  loop: false,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
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
    <div className={clsx("collections-area", spaceTopClass, spaceBottomClass)}>
      <div className="container mt-30">
        {/* section title
        <SectionTitleFour titleText="Collections" spaceBottomClass="mb-40" /> */}
        <Stack>
          <Typography
            sx={{
              color: "#1A1A1A",
              fontSize: { xs: "20px", md: "40px" },
              fontFamily: "Cinzel",
              textTransform: "uppercase",
              textAlign: "center",
              pb: 4,
            }}
          >
            Projects
          </Typography>
        </Stack>
        <div className="collection-wrap">
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
