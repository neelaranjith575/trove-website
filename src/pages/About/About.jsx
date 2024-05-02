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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
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
  }, [totalSteps]);

  useEffect(() => {
    if (activeStep === totalSteps) {
      setAllStepsCompleted(true);
    }
  }, [activeStep, totalSteps]);

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <div className="page">
          <div style={{ width: 450, height: 450 }} className="progressBar">
            <Typography
              sx={{
                fontSize: "45px",
                color: "#1A1A1A",
                fontFamily: "Libre Baskerville",
                fontWeight: 500,
                textTransform: "uppercase",
                ml: 10,
                mb: 5,
              }}
            >
              why trove?
            </Typography>
            <CircularProgressbar
              value={(activeStep / totalSteps) * 100}
              text={`${activeStep}/${totalSteps}`}
              strokeWidth={0.5}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "8px",
                pathTransitionDuration: 0.5,
                pathColor: `#6B6B6B`,
                textColor: "#D9D9D9",
                trailColor: "#D9D9D9",
                fontfamily: "Montserrat",
              })}
            />
          </div>

          <div className="slideSec">
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
