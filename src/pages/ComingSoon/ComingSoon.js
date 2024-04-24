import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
    Stack,
    Typography,

  } from "@mui/material";

const ComingSoon = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Not Found"
        description="404 of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Coming Soon", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                    <Stack sx={{pt:30,pb:30}}>
                <Typography
             
             sx={{
               fontSize: { xs: "30px", md: "50px" },
               lineHeight: "48px",
               fontWeight: 400,
               fontFamily: "Cinzel",
               ml:{xs:5,md:10},
               textAlign: { xs: "center", md: "center", lg: "center" },
             }}
           >
            Coming Soon
           </Typography>
           </Stack>
                  {/* <h2>OPPS! PAGE NOT FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>
                  <form className="searchform mb-50">
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    Back to home page
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ComingSoon;
