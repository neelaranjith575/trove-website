import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectSliderSingle = ({ data }) => {
  return (
    <div className="collection-product">
      <div className="collection-img">
        <img src={data.image} alt="" />
      </div>
      <div className="collection-content text-center">
        <h4 style={{ fontFamily: "Montserrat", fontSize: "24px" }}>
          <span>{data.title}</span>
        </h4>
        <p
          style={{
            paddingTop: "20px",
            fontFamily: "Montserrat",
            fontSize: "15px",
          }}
        >
          <span>{data.description}</span>
        </p>
      </div>
    </div>
  );
};

ProjectSliderSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default ProjectSliderSingle;
