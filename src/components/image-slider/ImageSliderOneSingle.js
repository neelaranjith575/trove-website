import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";


const ImageSliderOneSingle = ({ data }) => {

  
  return (
    <div className="single-image">
      <Tooltip title={data.title} arrow sx={{
          fontSize: "14px",
          backgroundColor: "#333",
          color: "red",
          borderRadius: "4px",
          padding: "8px",
        }}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt=""  />
      </Link>
      </Tooltip>
    </div>
  );
};

ImageSliderOneSingle.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ImageSliderOneSingle;
