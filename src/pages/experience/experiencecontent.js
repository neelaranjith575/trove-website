import { Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import contentimg from "../../assets/img/About/Contentimage.png";



const ExperienceContent = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 15,
                    height: { xs: "fit-content", md: "fit-content" },
                }}
            >
                <Stack>
                    <Grid
                        container
                        justifyContent={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        display={"flex"}

                        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
                    >
                        
                        <Grid item xs={12} md={6} >
                            <Box
                                component={"img"}
                                src={contentimg}
                                alt=""
                                sx={{ width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Stack
                                sx={{

                                    backgroundColor: "#ffffff",
                                    borderRadius: "15px 0px 0px 15px",
                                }}
                            >
                                <Paper sx={{ p: 2, boxShadow: "none" }}>
                                    <Typography
                                        sx={{
                                            color: "#1A1A1A",
                                            fontSize: { xs: "20px", md: "40px" },
                                            fontFamily: 'Cinzel',
                                            textTransform:'uppercase',
                                            pb: 2,
                                        }}
                                    >
                                        Designed to be free
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "Montserrat",
                                            color: "#1A2D4C",
                                            
                                            fontSize: { xs: "15px", md: "15px" },
                                            lineHeight: "30px",
                                        }}
                                    >
                                        Experience unparalleled freedom with Trove. Our franchise system revolutionizes business, 
                                        prioritizing efficient systems over micromanagement. 
                                        Elevate your venture with unmatched scalability and embrace a new era of entrepreneurial excellence.
                                    </Typography>
                                </Paper>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>


        </>
    )
}

export default ExperienceContent;