import PropTypes from "prop-types";
import clsx from "clsx";
import iconData from "./icondata.json";
import IconBackgroundSingle from "./iconbackgroundsingle.js";
import "./Iconbackground.css";

const IconBackground = ({ spaceTopClass, spaceBottomClass, bgClass }) => {
  return (
    <div
    data-aos="fade-up"
                data-duration="5000"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"  
      className={clsx(
        "icon-background-area",
        spaceTopClass,
        spaceBottomClass,
        bgClass
      )}
    >
      <div className="container">
        <div className="row">
          {iconData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <IconBackgroundSingle
                data={single}
                spaceBottomClass="mb-30"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

IconBackground.propTypes = {
  bgClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default IconBackground;
