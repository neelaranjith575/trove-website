import { Typography, Link, Box, Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import background from "../../assets/img/About/Banner.webp";
import contentImg from "../../assets/img/Careers/Life-at-Levin.png";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../../components/seo";
import Button from "@mui/material/Button";
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
                fontSize: { xs: "30px", md: "60px" },
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Launch your career <span>at Trove</span>
            </Typography>
            <Typography
              color="#FACE4E"
              fontWeight={600}
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "30px", md: "20px" },
                textAlign: "center",
              }}
            >
              We’re on a mission to lead the Tech recruitment sector globally;
              to Connect Tech Talent, we need the best talent
            </Typography>
            <Link
              to="/locations"
              style={{
                textDecoration: "none",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
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
                  },
                }}
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
            pb:10,
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
                      Life at Trove
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
                      Our people are the most important element of Levin, and we
                      know great people make a great workplace. We believe in
                      creating a work environment that brings the best out of
                      you. Here are some of the perks that you can look forward
                      to…
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
                  sx={{ width: "80%" }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </LayoutOne>
    </>
  );
};
export default Careers;
