import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryTwoSingle = ({ data }) => {
  return (
    <div className="collection-product">
      <div className="collection-img">
        {/* <Link to={process.env.PUBLIC_URL + data.link}> */}
          <img src={data.image} alt="" />
        {/* </Link> */}
      </div>
      <div className="collection-content text-center">
        {/* <span>{data.subtitle}</span> */}
        <h4>
          {/* <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link> */}
          <span>{data.title}</span>
        </h4>
        <p style={{paddingTop: '20px'}}>
          {/* <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link> */}
          <span>{data.description}</span>
        </p>
      </div>
    </div>
  );
};

CategoryTwoSingle.propTypes = {
  data: PropTypes.shape({}),
}

export default CategoryTwoSingle;
