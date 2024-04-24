import React, { useState } from 'react';
import './Style/styles.scss';
import { Grid, Typography } from '@mui/material';

const CircularStepper = ({ size = 150, strokeWidth = 5, steps = [] }) => {
    const [activeStep, setActiveStep] = useState(1);
    const [startStep, setStartStep] = useState(1);

    const radius = (size - strokeWidth) / 2;
    const dashArray = radius * Math.PI * 2;
    const stepAngle = (2 * Math.PI) / steps.length;

    const handleStepClick = (index) => {
        setActiveStep(index + 1);
        if (index + 1 >= startStep + 3 && index < steps.length - 1) {
            setStartStep(index + 1 - 2);
        } else if (index + 1 <= startStep && index > 0) {
            setStartStep(index + 1);
        }
    };

    // Calculate the position of the active step
    const activeStepX = size / 2 + radius * Math.cos((-Math.PI / 2) + stepAngle * (activeStep - 1));
    const activeStepY = size / 2 + radius * Math.sin((-Math.PI / 2) + stepAngle * (activeStep - 1));

    return (
        <div className="scroll-container">
            <Grid container spacing={10} p={15}>
                <div className="circular-stepper-container">
                    <Grid item xs={6}>
                        <div className="circular-stepper">
                            <svg width={size} height={size}>
                                {/* Render circles for visible steps */}
                                {steps.slice(startStep - 1, startStep + 2).map((step, index) => {
                                    const stepX = size / 2 + radius * Math.cos((-Math.PI / 2) + stepAngle * (startStep + index - 1));
                                    const stepY = size / 2 + radius * Math.sin((-Math.PI / 2) + stepAngle * (startStep + index - 1));
                                    // const opacity = startStep + index === activeStep ? 1 : 0.5; // Set opacity based on active step
                                    return (
                                        <circle
                                            key={index}
                                            cx={stepX}
                                            cy={stepY}
                                            r={strokeWidth * 5} // Adjust the radius as needed
                                            fill="transparent"
                                            stroke="#6B6B6B" // Stroke color for all steps
                                            strokeWidth={strokeWidth}
                                            // opacity={opacity} // Set opacity
                                        />
                                    );
                                })}
                                {/* Render the circle for active step */}
                                <circle
                                    cx={activeStepX}
                                    cy={activeStepY}
                                    r={strokeWidth * 10} // Adjust the radius as needed
                                    stroke="#6B6B6B" // Stroke color for all steps
                                    fill="#D9D9D9" // Background color for active step
                                />
                                {/* Render the progress arc */}
                                <circle
                                    className="circle-progress"
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    strokeWidth={`${strokeWidth}px`}
                                    transform={`rotate(-180 ${size / 2} ${size / 2})`}
                                    style={{
                                        strokeDasharray: dashArray,
                                        strokeDashoffset: dashArray - (dashArray * activeStep) / steps.length
                                    }}
                                />
                                {/* Render the text for active step */}
                                <text
                                    x={activeStepX}
                                    y={activeStepY}
                                    dy=".3em"
                                    textAnchor="middle"
                                    className="circle-text"
                                    fill="white"
                                >
                                    {activeStep}
                                </text>
                            </svg>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="active-values" >
                            {steps.slice(startStep - 1, startStep + 2).map((step, index) => (
                                <div key={index + startStep - 1} onClick={() => handleStepClick(startStep + index - 1)} style={{ opacity: startStep + index === activeStep ? 1 : 0.5 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            p: 1,
                                            color: '#1A1A1AE5',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '15px',
                                            p: 1,
                                            color: '#1A1A1AE5',
                                        }}
                                    >
                                        {step.subtitle}
                                    </Typography>
                                    <hr></hr>
                                </div>
                            ))}
                        </div>
                    </Grid>
                </div>
            </Grid>
        </div>
    );
};

export default CircularStepper;
