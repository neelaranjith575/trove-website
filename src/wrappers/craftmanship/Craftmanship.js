import { Box, Stack, Typography } from "@mui/material";
import { useState } from 'react';

const Craftmanship = () => {
    const videoUrl = 'assets/video/video.mp4'; // Replace with your video URL
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        
            <Box data-aos="fade-up" data-aos-duration="3000" sx={{ m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',height:'fit-content',pt:{xs:5, md:5}, pb:{xs:5, md:5} }}>
                <Stack>
                    <Typography
                        sx={{
                            fontSize: { xs: "30px", md: "50px" },
                            textAlign: 'center',
                            mb: 1, mt: 5,
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            fontFamily: "Libre Baskerville",
                        }}>AN EXPERIENCE TO TREASURE</Typography>
                    <Typography sx={{ fontSize: { xs: "13px", md: "17px" }, textAlign: 'center', mb: 5, fontFamily: 'Montserrat' }}>Transforming spaces into experiences. Elevate your home with our exquisite <br></br>collections — a touch of elegance in every tile.
    
                    </Typography>
                </Stack>
    
                <Stack  alignItems={"center"} sx={{ display: { xs: 'block', md: 'none', }, paddingTop:{xs:0, md:5} , mt:3 }}>
                    <video
                        width="100%" // Use 100% width for mobile screens
                        height="200"
                        controls
                        autoPlay // Autoplay enabled
                        muted // Mute the sound
                        onClick={handlePlayPause}
                        sx={{
                            maxWidth: "560px", // Set max width for larger screens
                            width: "100%", // Ensure responsive width
                            height: "150px", // Ensure responsive height
                        }}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Stack>
    
                <Stack paddingTop={5} alignItems={"center"} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <video
                        width="100%" // Use 50% width for larger screens
                        height="380"
                        controls
                        autoPlay // Autoplay enabled
                        muted // Mute the sound
                        onClick={handlePlayPause}
                        sx={{
                            maxWidth: "560px", // Set max width for larger screens
                            width: "50%", // Ensure responsive width
                            height: "auto", // Ensure responsive height
                        }}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Stack>
            </Box>
        );
    };
    
    export default Craftmanship;