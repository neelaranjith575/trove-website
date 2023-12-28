import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-two.json";
import FeatureIconTwoSingle from "../../components/feature-icon/FeatureIconTwoSingle.js";
import { Typography } from "@mui/material";

const FeatureIconTwo = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row feature-icon-two-wrap">
          <Typography sx={{fontSize:'50px', textAlign:'center', mb:5, fontWeight:500}}>SERVICES</Typography>
          {featureIconData?.map((single, key) => (
            <div className="col-md-3" key={key}>
              <FeatureIconTwoSingle
                data={single}
                spaceBottomClass="mb-0"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconTwo;
