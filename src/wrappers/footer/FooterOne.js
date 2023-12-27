import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import LeftSideNav from "../../components/header/LeftSideNav";
import RightSideNav from "../../components/header/RightSideNav";
import Logo from "../../components/header/Logo";



const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
  layout
}) => {
  return (
    <footer className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass )} style={{backgroundColor:'white'}}>
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
           
            <FooterCopyright
              footerLogo="/assets/img/logo/logo.png"
              spaceBottomClass="mb-30"
            />
          </div> */}
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-12 col-sm-4"
            }`}
            style={{backgroundColor:'black' ,padding:'40px'}}
          >
            <div className="footer-widget mb-30 ml-30" style={{textAlign:'center'}}>
              <div className="footer-title">
                <h3 style={{fontSize:'35px', color:'#ffffff'}}>STAY UP TO DATE WITH OUR LATEST NEWS & EVENTS</h3>
                <h5 style={{fontSize:'18px', color:'#ffffff'}}>Subscribe to our newsletter</h5>
              </div>
            </div>
          </div>
          <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-5 col-lg-5 d-none d-lg-block" style={{marginTop:'30px'}}>
              {/* Nav menu */}
              {/* <LeftSideNav /> */}
              <hr style={{height: "10px", backgroundColor:'black', opacity:1}}/>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/Trovelogo.png" logoClass="logo"  />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-8" style={{marginTop:'30px'}}>
              {/* Icon group */}
              {/* <IconGroup /> */}
              {/* <RightSideNav /> */}
              <hr style={{height: "10px", backgroundColor:'black', opacity:1}}/>
            </div>

          </div>
        </div>
          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Support Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Size guide</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"
            }`}
          >
            footer newsletter
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
