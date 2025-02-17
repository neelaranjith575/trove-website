import PropTypes from "prop-types";
import clsx from "clsx";
import IconData from "../Careers/IconData.json";
import IconContent from "../Experience/iconcontent";
import { Card } from "@mui/material";


const OurVision = ({ spaceTopClass, spaceBottomClass }) => {
  return (

    <div data-aos="fade-up" data-aos-duration="3000" className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Card sx={{ mb: 2 }}>
          <div className="row feature-icon-two-wrap">
            {IconData?.map((single, key) => (
              <div className="col-md-3" key={key}>
                <IconContent
                  data={single}
                  spaceBottomClass="mb-0"
                  textAlignClass="text-center"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>

  );
};

OurVision.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default OurVision;
