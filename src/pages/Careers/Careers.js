import { Typography, Link, Box, Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import background from "../../assets/img/About/careerbannerwebp.webp";
import contentImg from "../../assets/img/Careers/sectioncareer2.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../../components/seo";
import Button from "@mui/material/Button";
import OurVision from "./ourVision";
import OurValues from "./ourValues";
import OurStory from "./ourStory";



const Careers = () => {
  return (
    <>
      <SEO titleTemplate="Careers" description="The Ultimste Tile Studio." />
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
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: { xs: "75vh", md: "120vh" },
            mt: -13.5,
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
                fontSize: { xs: "20px", md: "50px" },
                textAlign: { xs: "center", md: "center" },
              }}
            >

              Step into Trove—  Be Part of Something Bigger!
            </Typography>
            <Typography
              color="#FACE4E"
              fontWeight={600}
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "18px", md: "20px" },
                textAlign: "center",
              }}
            >
              At Trove, your ideas fuel innovation, your passion drives progress, and your growth knows no bounds.
            </Typography>
            <Link
              to="https://forms.gle/tw94sKZDjT93nmoL8"
              style={{
                textDecoration: "none",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}

            >
              <Button
                href="https://forms.gle/tw94sKZDjT93nmoL8"
                variant="contained"
                sx={{
                  backgroundColor: "#1A1A1A",
                  borderRadius: "0px",
                  height: "65px",
                  width: "100%",
                  fontSize: "20px",
                  mt: 5,
                  fontFamily: "Libre Baskerville",
                  "&:hover": {
                    backgroundColor: "#FACE4E",
                    color: "#000000"
                  },
                }}
                target="_blank"
              >
                Join Our Team
              </Button>
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            pt: 10,
            pb: 10,
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
              sx={{ flexDirection: { xs: "row", md: "row" } }}
            >
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={12}
                md={5}
                data-aos="fade-up"
                data-duration="3000"
                data-aos-anchor-placement="top-center"
                p={2}
              >
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
                        fontSize: { xs: "28px", md: "45px" },
                        fontFamily: "Libre Baskerville",
                        textTransform: "uppercase",
                        textAlign: { xs: "center", md: "left" },
                        pb: 2,
                      }}
                    >
                      Live with Trove
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "#1A1A1A",
                        fontSize: { xs: "13px", md: "17px" },
                        lineHeight: "30px",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      With Trove, make your everyday a new challenge to improve and excel. It's not just a job but a path to grow where every contribution of yours is valued. You are going to be a part of the journey which is going to make a difference.
                    </Typography>
                  </Paper>
                </Stack>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                data-aos="fade-up"
                data-duration="3000"
                data-aos-anchor-placement="top-center"
              >
                <Box
                  component={"img"}
                  src={contentImg}
                  alt=""
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>


        <Box >
          <Stack>
            <OurStory />
          </Stack>
        </Box>

        <Box>
          <Stack>
            <OurValues />
          </Stack>
        </Box>
        <Box sx={{ py: 8 }} data-aos="fade-up" data-aos-duration="3000">
          <Typography
            sx={{
              color: "#1A1A1A",
              fontSize: { xs: "28px", md: "45px" },
              fontFamily: "Libre Baskerville",
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "center" },
              pb: 2,
            }}
          >
            Our Mission
          </Typography>
          <OurVision />
        </Box>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#315bfd0d',
            p: 5
          }}
        >

          <Link
            to="https://forms.gle/tw94sKZDjT93nmoL8"
            style={{
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              href="https://forms.gle/tw94sKZDjT93nmoL8"
              variant="contained"
              sx={{
                backgroundColor: "#1A1A1A",
                borderRadius: "0px",
                height: "65px",
                width: "100%",
                fontSize: "20px",
                fontFamily: "Libre Baskerville",
                "&:hover": {
                  backgroundColor: "#FACE4E",
                  color: '#000000'
                },
              }}
              target="_blank"
            >
              APPLY NOW
            </Button>
          </Link>
        </Stack>



      </LayoutOne>
    </>
  );
};
export default Careers;
