// Business.js
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import businessData from "./businessData";
import "./Business.css"; // Import the CSS file for styles

const Business = () => {
    return (
        <>
            <Stack sx={{pt:10}}>
                <Typography
                    sx={{
                        color: "#1A1A1A",
                        fontSize: { xs: "20px", md: "40px" },
                        fontFamily: 'Cinzel',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        pb: 1,
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
                sx={{ ml: 20, mr: 20, pt: 5, pb: 5, mb: 5, borderRadius: "20px" ,}}
            >

                <Grid
                    container
                    spacing={{ xs: 2, md: 5 }}
                    display={"flex"}
                    flexDirection={"row"}
                    alignContent={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {businessData.map((item) => (
                        <Grid item xs={12} md={3} key={item.id} >
                            <Stack className="business-card" sx={{ p: 3 }}>
                                <Box
                                    component={"img"}
                                    src={item.imagePath}
                                    alt=""
                                    sx={{ width: "35%" }}
                                />
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
                </Grid>
            </Stack>
        </>
    );
};

export default Business;
