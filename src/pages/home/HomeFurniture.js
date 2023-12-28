import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import BannerTwo from "../../wrappers/banner/BannerTwo";
import TabProductTwo from "../../wrappers/product/TabProductTwo";
import CountDownOne from "../../wrappers/countdown/CountDownOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import ImageSliderThree from "../../wrappers/image-slider/ImagSliderThree";
import ImageSliderFour from "../../wrappers/image-slider/ImageSliderFour";
import Features from "../../wrappers/feature/Features";

const HomeFurniture = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Trove "
        description="Furniture home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwo />

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
        <Features />
        <h1></h1>
        <ImageSliderTwo />
        <ImageSliderThree />
        <ImageSliderFour />

        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
       

        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurniture;
