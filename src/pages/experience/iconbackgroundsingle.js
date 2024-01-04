import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const IconBackgroundSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
      <div className={clsx("single-count", textAlignClass, spaceBottomClass)}>
        <div className="count-icon">
          {/* <i className={data.iconClass} /> */}
          <img src={data.imageUrl} alt="Count Image" />
        </div>
        <h2 className="count">
          <VisibilitySensor
            onChange={onVisibilityChange}
            offset={{ top: 10 }}
            delayedCall
          >
            <CountUp end={didViewCountUp ? data.countNum : 0} />
          </VisibilitySensor>
        </h2>
        <span>{data.title1}</span><br/>
        <span>{data.title2}</span>
      </div>
  );
};

IconBackgroundSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default IconBackgroundSingle;
