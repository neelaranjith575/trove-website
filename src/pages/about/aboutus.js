import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import background from "../../assets/img/About/Banner.webp";
import LayoutOne from "../../layouts/LayoutOne";
import WorkProcess from "./workprocess";
import Content from "../about/content";
import Business from "./business";
import SEO from "../../components/seo";
import Counter from "./counter";



const AboutUs = () => {
    return (
        <>
        <SEO
        titleTemplate="About Us"
        description="Furniture home of flone react minimalist eCommerce template."
      />
            <LayoutOne headerTop="visible">
                <Box
                    sx={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        height: { xs: "75vh", md: "120vh" },
                        mt:-13
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
                            purpose
                        </Typography>
                    </Stack>
                </Box>


                <WorkProcess />
                <Content />
                <Business  />
                <Counter />

            </LayoutOne>


        </>
    )
}

export default AboutUs;