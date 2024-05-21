import { useEffect, useState } from "react";
import PointCard from "../../components/PointCard/PointCard";
import data from "../../assets/data/data.json";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../css/About.css";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const About = () => {
  const totalSteps = Object.keys(data).length; // Total steps equals to the number of data points
  const [activeStep, setActiveStep] = useState(1); // Initially set the first step as active
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);
  const [scrollTopVal, setScrollTopVal] = useState(1)

  useEffect(() => {
    const page = document.querySelector('.page');

    const handleScroll = () => {

      if (page) {
        const rect = page.getBoundingClientRect();
        if (rect.top < 0){
          const val = Math.abs(rect.top)
          setScrollTopVal(val);
        }
      }

      const scrollTop = scrollTopVal
      const documentHeight = page.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;

      // Calculate the current step based on the scroll position
      const step = Math.round((scrollTop / maxScroll) * totalSteps);

      // Ensure step is within the bounds of 1 and totalSteps
      const clampedStep = Math.min(Math.max(1, step), totalSteps);

      // Update the active step
      setActiveStep(clampedStep);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSteps, scrollTopVal]);

  useEffect(() => {
    if (activeStep === totalSteps) {
      setAllStepsCompleted(true);
    }
  }, [activeStep, totalSteps]);

  return (
    <>
      <Box sx={{ pb: 5 }}>
      
           <div className="page">
          <div style={{ width: 450, height: 500 }} className="progressBar"> 
            <CircularProgressbar
              value={(activeStep / totalSteps) * 100}
              text={`${activeStep}/${totalSteps}`}
              strokeWidth={0.5}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "8px",
                pathTransitionDuration: 0.5,
                pathColor: `#6B6B6B`,
                textColor: "#6B6B6B",
                trailColor: "#D9D9D9",
                
              })}
            />
          </div>

          <div className="slideSec">
          <Typography
               sx={{
                position: 'sticky',
                top: 75,
                zIndex: 1000,
                fontSize: {xs:"30", md:"50px"},
                color: "#1A1A1A",
                fontFamily: "Libre Baskerville",
                fontWeight: 500,
                textTransform: "uppercase",
                ml: -5,
                mb: 5,
                pt:2,
                // pb:5,
                backgroundColor: 'white', // Add background color if needed
                //padding: '10px', // Add padding if needed
                // boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add box shadow if needed
              }}
            >
              WHY CHOOSE TROVE?
            </Typography>
            {Object.keys(data).map((key, index) => (
              <div className="pointCard" key={key}>
                <PointCard
                  id={key}
                  title={data[key].title}
                  description={data[key].description}
                  active={index + 1 === activeStep} // Set active based on activeStep
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
      
    </>
  );
};

export default About;
