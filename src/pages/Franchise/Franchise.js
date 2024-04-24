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
        titleTemplate="FRANCHISE"
        description="Furniture home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: { xs: "75vh", md: "120vh" },
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
              Join
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
              purpose
            </Typography>
          </Stack>
        </Box>

        <ExperienceContent />
        <IconBackground
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="background-image"
        />
        <ProjectSlider spaceTopClass="pt-100" />
        <LogoSlider spaceTopClass="pt-50"
           />
          <LogoSlider 
          spaceBottomClass="pb-50" />
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          bgColorClass="bg-gray-3"
        />
        
      </LayoutOne>
    </>
  );
};

export default Franchise;
