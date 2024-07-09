import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import LeftSideNav from "../../components/header/LeftSideNav";
import RightSideNav from "../../components/header/RightSideNav";
import { Grid, Paper, Stack, Typography, Box, Link } from "@mui/material";

const HeaderOne = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className={clsx("header-area clearfix", headerBgClass, headerPositionClass)}>
      <div
        className={clsx(
          "header-top-area",
          headerPaddingClass, top === "visible" ? "d-none d-lg-block" : "d-none",
          borderStyle === "fluid-border" && "border-none"
        )}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          {/* header top */}
          {/* <HeaderTop borderStyle={borderStyle} /> */}
        </div>
      </div>

      <div
        className={clsx(
          headerPaddingClass,
          "sticky-bar header-res-padding clearfix",
          scroll > headerTop && "stick"
        )}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 d-none d-lg-block">
              {/* Nav menu */}
              <LeftSideNav />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-4" >
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/Trovelogo.png" logoClass="logo" style={{ marginLeft: '50px' }} />
              {/* <Link to="/" style={{
                textDecoration: 'none', alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}>
                <Box
                  component="img"
                  src={require("../../assets/img/Logo/Trovelogo.png")}
                  alt=""
                  sx={{ width: "100%", mr: 8 }}
                />
              </Link> */}
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-8">
              {/* Icon group */}
              <IconGroup />

              <MobileMenu />
            </div>

          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>

    </header>
  );
};

HeaderOne.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderOne;
