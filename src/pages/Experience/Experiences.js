import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import background from "../../assets/img/About/Banner.webp";
import LayoutOne from "../../layouts/LayoutOne";
import WorkProcess from "./Workprocess";
import Content from "./content";
import SEO from "../../components/seo";
import About from "../About/About"
// import Counter from "./counter";



const Experience = () => {
    return (
        <>
            <SEO
                titleTemplate="FRANCHISE"
                description="The Ultimste Tile Studio."
            />
            <LayoutOne headerTop="visible">
                <Box
                    data-aos="fade-in"
                    data-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    sx={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        height: { xs: "75vh", md: "120vh" },
                        mt: -13.5
                    }}
                >
                    {" "}
                    <Stack
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            color="#ffffff"
                            fontWeight={700}
                            sx={{
                                fontFamily: "Montserrat",
                                fontSize: { xs: "30px", md: "100px" },
                                textAlign: { xs: "center", md: "center" },
                            }}
                        >
                            Join
                        </Typography>
                        <Typography
                            color="#FACE4E"
                            fontWeight={700}
                            sx={{ fontFamily: "Montserrat", fontSize: { xs: "30px", md: "100px" }, }}
                        >
                            the
                        </Typography>
                        <Typography
                            color="#FACE4E"
                            fontWeight={700}
                            sx={{ fontFamily: "Montserrat", fontSize: { xs: "30px", md: "100px" }, }}
                        >
                            Purpose
                        </Typography>
                    </Stack>
                </Box>
                <WorkProcess />
                <Content />
                <About />
                {/* <Business  /> */}

                {/* <Counter /> */}


            </LayoutOne>


        </>
    )
}

export default Experience;