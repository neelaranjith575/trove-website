import PropTypes from "prop-types";
import clsx from "clsx"

const TestimonialOneSingle = ({ data, testimonialClass }) => {
  return (
    <div className={clsx(testimonialClass || "single-testimonial", "text-center")} style={{boxshadow: "3px 3px 20px 0px #000000"
  }} >
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p style={{fontFamily:'Montserrat', fontSize:'16px' , fontStyle:'normal', fontWeight:400}}>{data.content}</p>
      <div className="client-info" >
        <i className="fa fa-quote-right" style={{color:'#F2D172'}} />
        <h5 style={{fontFamily:'Montserrat', fontSize:'16px' , fontStyle:'normal', fontWeight:800}}>{data.customerName}</h5>
        {/* <span>{data.title}</span> */}
      </div>
    </div>
  );
};

TestimonialOneSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default TestimonialOneSingle;
