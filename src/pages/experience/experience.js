import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import background from "../../assets/img/About/Banner.webp";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../../components/seo";
import ExperienceContent from "./experiencecontent";




const Experience = () => {
    return (
        <>
        <SEO
        titleTemplate="Experience"
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

               <ExperienceContent />

                

            </LayoutOne>


        </>
    )
}

export default Experience;