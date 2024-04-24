import React, { useState, useEffect, useRef } from 'react';
import CircularStepper from '../Whyus/circle_stepper';
import { Stack } from "@mui/system";
import { Grid, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const steps = [
  { title: '1. Proven Track Record', subtitle: 'With over two decades of industry experience, Trove prioritizes stability and authentic customer connections. Since our inaugural franchise in 2020, we have organically expanded to 12 thriving locations within three years.' },
  { title: '2. Purpose-Driven Leadership', subtitle: 'Rooted in purpose, Trove envisions a sustainable, interconnected world. Our guiding vision nurtures potential, fosters innovation, and creates positive change across generations.' },
  { title: '3. The Technological Advantage', subtitle: 'Trove wholeheartedly embraces advanced processes and technology. Our customized cloud-based software, featuring a top-tier reporting engine, keeps us ahead in the digital era. Stay at the forefront with Trove’s commitment to innovation.' },
  // { title: '4. Transparent Financials', subtitle: 'Transparency is foundational at Trove. We commit to no hidden costs, providing clear and straightforward financial information. Your financial confidence is our assurance for a trustworthy partnership.' },
  // { title: '5. The Technological Advantage', subtitle: 'Trove wholeheartedly embraces advanced processes and technology. Our customized cloud-based software, featuring a top-tier reporting engine, keeps us ahead in the digital era. Stay at the forefront with Trove’s commitment to innovation.' },
  // { title: '6. Transparent Financials', subtitle: 'Transparency is foundational at Trove. We commit to no hidden costs, providing clear and straightforward financial information. Your financial confidence is our assurance for a trustworthy partnership.' }
];

const Whyus = () => {
  const [activeStep, setActiveStep] = useState(3);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;
      const totalSteps = steps.length;

      // Calculate the height of each step
      const stepHeight = sectionRect.height / totalSteps;

      // Calculate the visible area of the section
      const visibleHeight = Math.min(windowHeight, sectionRect.bottom) - Math.max(0, sectionTop);

      // Calculate the ratio of visible height to total height
      const scrollRatio = visibleHeight / sectionRect.height;

      // Determine the active step based on the scroll ratio
      let step;
      if (scrollRatio === 0) {
        // Handle when the section is not yet scrolled
        step = 0;
      } else if (scrollRatio === 1) {
        // Handle when the section is fully visible
        step = totalSteps - 1;
      } else {
        step = Math.ceil(scrollRatio * totalSteps); // Use ceil to ensure we always go to the next step when partially scrolled
      }

      setActiveStep(step);
    };



    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleOnClickNext = () => {
    const step = activeStep + 1;
    setActiveStep(step);
  };

  const handleOnClickBack = () => {
    const step = activeStep - 1;
    setActiveStep(step);
  };





  return (
    <Stack sx={{ ml: 10, mr:10}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} ref={sectionRef} pb={5} pt={5}>
          <Stack direction={'row'} justifyContent={"flex-end"} >
            <Button
              onClick={activeStep !== 1 ? handleOnClickBack : null}
            >
              <ArrowBackIosIcon sx={{color:'#858585'}} />
            </Button>
            <Button
              onClick={activeStep === steps.length ? null : handleOnClickNext}
            >
              <ArrowForwardIosIcon sx={{color:'#858585'}} />
            </Button>
          </Stack>
          <CircularStepper
            activeStep={activeStep}
            steps={steps}
            strokeWidth={2}
            stepHeight={5}
            size={500}
          />
        </Grid>


      </Grid>
    </Stack>
  );
};

export default Whyus;
