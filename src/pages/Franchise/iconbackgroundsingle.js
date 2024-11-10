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
        <img src={data.imageUrl} alt="Count Image" width={60} height={60} />
      </div>
      {/* <h2 className="count" style={{ color: 'white', fontFamily: 'monospace' }}>
        <VisibilitySensor
          onChange={onVisibilityChange}
          offset={{ top: 10 }}
          delayedCall
        >
          <CountUp end={didViewCountUp ? data.countNum : 0} style={{ fontWeight: 'normal' }} />
        </VisibilitySensor>
        +
      </h2> */}
      <h2 className="count" style={{ fontFamily: 'Montserrat', fontSize: '35px', fontWeight: 500, color: '#ffffff', paddingTop: "10px", textAlign: 'center' }}>{data.numbers}</h2>
      <span style={{ fontFamily: 'Montserrat', fontSize: '15px', fontWeight: 500 }}>{data.title1}</span><br />
      <span style={{ fontFamily: 'Montserrat', fontSize: '15px', fontWeight: 500 }}>{data.title2}</span>
    </div>
  );
};

IconBackgroundSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default IconBackgroundSingle;
