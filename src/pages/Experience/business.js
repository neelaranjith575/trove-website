// Business.js
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import businessData from "./businessData";
import "./Business.css"; // Import the CSS file for styles
import Whyus from "../Whyus/Whyus";

const Business = () => {
    return (
        <>
            <Stack sx={{ pt: 10 }}>
                <Typography
                    sx={{
                        color: "#1A1A1A",
                        fontSize: { xs: "28px", md: "45px" },
                        fontFamily: 'Libre Baskerville',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        pb: 2,
                    }}
                >
                    How to find the right business for you?
                </Typography>
            </Stack>
            <Stack
                display={"flex"}
                flexDirection={"row"}
                alignContent={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                // sx={{ ml: { xs: 0, md: 20 }, mr: { xs: 0, md: 20 }, pt: 5, pb: 5, mb: 5, pl: { xs: 5, md: 0 }, pr: { xs: 5, md: 5 }, borderRadius: "20px", }}
            >
                 <Whyus />

                {/* <Grid
                    container
                    spacing={{ xs: 2, md: 5 }}
                    display={"flex"}
                    flexDirection={"row"}
                    alignContent={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {businessData.map((item, index) => (
                        <Grid item xs={12} md={3} key={item.id}>
                            <Stack className={index % 2 === 0 ? "business-card" : ""} sx={{ p: 3, }}>
                                <Typography
                                    sx={{
                                        fontFamily: "Montserrat",
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        p: 1,
                                        color: "#1A1A1AE5",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        color: "#000000",
                                        p: 1,
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid> */}

            </Stack>
        </>
    );
};

export default Business;
