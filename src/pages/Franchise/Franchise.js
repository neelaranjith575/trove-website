import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import background from "../../assets/img/About/Banner.webp";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../../components/seo";
import ExperienceContent from "./experiencecontent";
import LogoSlider from "./logoslider";
import IconBackground from "./iconbackground";
import ProjectSlider from "./projectslider";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";

const Franchise = () => {
  return (
    <>
      <SEO
        titleTemplate="EXPERIENCE"
        description="The Ultimste Tile Studio"
      />
      <LayoutOne headerTop="visible">
        <Box
          data-aos="fade-in"
          data-duration="5000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"   
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: { xs: "75vh", md: "120vh" },
            mt:-13.5
          }}
        >
          {" "}
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="#ffffff"
              fontWeight={700}
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "30px", md: "100px" },
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Experience
            </Typography>
            <Typography
              color="#FACE4E"
              fontWeight={700}
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "30px", md: "100px" },
              }}
            >
               the
            </Typography>
            <Typography
              color="#FACE4E"
              fontWeight={700}
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "30px", md: "100px" },
              }}
            >
               Excellence
            </Typography>
          </Stack>
        </Box>

        <ExperienceContent />
        <IconBackground
          spaceTopClass="pt-150"
          spaceBottomClass="pb-150"
          bgClass="background-image"
        />
        <ProjectSlider spaceTopClass="pt-100" spaceBottomClass="pb-100"/>
        <LogoSlider spaceBottomClass="pb-100"  spaceTopClass="pt-100"
           />
          {/* <LogoSlider 
          spaceBottomClass="pb-50" /> */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          bgColorClass="bg-gray-3"
        />
        
      </LayoutOne>
    </>
  );
};

export default Franchise;
