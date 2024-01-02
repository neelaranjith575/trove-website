import PropTypes from "prop-types";
import clsx from "clsx";


const IconContent = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
   
      <div className={clsx("support-wrap-2 support-shape", spaceBottomClass, textAlignClass)}>
        <div className="support-content-2" style={{paddingTop:'50px', paddingBottom:'20px', paddingLeft:'10px', paddingRight:'10px'}}>
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
            width={80}
            height={80}
          />
          <h5 style={{fontFamily:'Montserrat', fontWeight:'700'}} >{data.title}</h5>
          <p style={{fontFamily:'Montserrat', fontSize:'15px'}}>{data.subtitle}</p>
        </div>
    </div>
  
  );
};

IconContent.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default IconContent;
