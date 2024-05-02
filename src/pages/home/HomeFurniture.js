import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import Features from "../../wrappers/feature/Features";
import Craftmanship from "../../wrappers/craftmanship/Craftmanship";
import Portofolio from "../portfolio/Portfolio";
import HeroSliderEleven from "../../wrappers/hero-slider/HeroSliderEleven";
import HomeSlider from "../../data/hero-sliders/homeSlider";
import { Stack } from "@mui/material";
import Products from "../../components/product/sub-components/Products"
// import Slider from "./../../data/slider/slider"

const HomeFurniture = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Trove "
        description="Furniture home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <Stack sx={{display:{xs:'block', md:'none'}}}>
        <HeroSliderEleven  />
        </Stack>
        <Stack sx={{display:{xs:'none', md:'block'}}}>
        <HomeSlider />
        </Stack>
        {/* video section */}
        <Craftmanship />

        {/* banner */}
        {/* <BannerTwo spaceTopClass="pt-80" spaceBottomClass="pb-60" /> */}

        {/* tab product */}
        {/* <TabProductTwo spaceBottomClass="pb-100" category="furniture" /> */}

        {/* countdown */}
        {/* <CountDownOne
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/bg/bg-1.jpg"
          dateTime="November 13, 2023 12:12:00"
        /> */}

        {/* category section */}
        <Features  />

        {/* Portofolio section */}
        <Portofolio />

        {/* <Products /> */}

        {/* feature icon */}
        <FeatureIconTwo  spaceBottomClass="pb-50"  spaceTopClass="pt-80" />

        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurniture;
